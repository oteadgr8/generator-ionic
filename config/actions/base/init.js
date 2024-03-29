var path = require('path');
var fs = require('fs');
var xml2js = require('xml2js');

var prompts = require('./prompts');
var myUtils = require('../../../util');

var originalConfigPath = 'config.xml';
var expectedConfigPath = path.join('www', originalConfigPath);

var resolveAppObject = function(data) {

    var trim = this._.trim;

    data = data.widget;

    return {
        name: trim(data.name[0]),
        desc: trim(data.description[0]),
        user: trim(data.author[0]._),
        email: trim(data.author[0].$.email),
        www: trim(data.author[0].$.href),
        nameSlug: trim(data.$.id.split('.').pop())
    };
};

var setAppDetails = function() {
    var parser = new xml2js.Parser();

    parser.parseString(fs.readFileSync(expectedConfigPath), function (err, result) {
        this.options.app = resolveAppObject.call(this, result);
    }.bind(this));
};

var setConfig = function(cb) {

    this.template('_config.xml', expectedConfigPath);

    cb();
};

module.exports = function () {

    var cb = this.async();

    /* retrieve previously stored, app-related config values  */
    if(this._.isUndefined(this.options.app)) {

        myUtils.success('Retrieving application data from existing config...');

        setAppDetails.call(this);
    }

    myUtils.success('Set config options:');

    this.prompt(prompts, function (props) {

        this.preferences = props.preferences;

        var currentConfigPath = (fs.existsSync(originalConfigPath)) ? originalConfigPath : expectedConfigPath;

        /* make sure that we are removing previous config only if exists */
        fs.unlink(currentConfigPath, function(err){
            if(err) {
                error('`rm config.xml` failed with code ' + errr.errno + '. Try to run it later.', 'red');
            }
            else {
                setConfig.call(this, cb);
            }
        }.bind(this));

    }.bind(this));
};