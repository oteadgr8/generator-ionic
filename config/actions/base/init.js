var path = require('path');
var fs = require('fs');

var prompts = require('./prompts');
var myUtils = require('../../../util');

module.exports = function () {

    var cb = this.async();

    var setConfig = function() {

        /* and put better one inside `www` directory */
        this.template('_config.xml', path.join('www', 'config.xml'));

        cb();
    };

    myUtils.success('Set config options:');

    this.prompt(prompts, function (props) {

        this.preferences = props.preferences;

        if(fs.existsSync('config.xml')) {

            /* remove Cordova config */
            fs.unlink('config.xml', function(err){
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