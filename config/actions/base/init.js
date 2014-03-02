var path = require('path');
var fs = require('fs');

var prompts = require('./prompts');
var myUtils = require('../../../util');

module.exports = function () {

    var cb = this.async();
    var configPath = path.join('www', 'config.xml');

    var setConfig = function() {

        this.template('_config.xml', configPath);

        cb();
    };

    myUtils.success('Set config options:');

    this.prompt(prompts, function (props) {

        this.preferences = props.preferences;

        if(fs.existsSync(configPath)) {

            /* remove Cordova config and replace with more personalised */
            fs.unlink(configPath, function(err){
                if(err) {
                    error('`rm config.xml` failed with code ' + errr.errno + '. Try to run it later.', 'red');
                }
                else {
                    setConfig.call(this);
                }
            }.bind(this));
        }
        else {
            setConfig.call(this);
        }

    }.bind(this));
};