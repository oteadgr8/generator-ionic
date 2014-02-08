var spawn = require('child_process').spawn;
var path = require('path');

var prompts = require('./prompts');
var myUtils = require('../../../util');

module.exports = function () {

    var cb = this.async();

    myUtils.success('Set config options:');

    this.prompt(prompts.cordova, function (props) {

        /* remove Cordova config */
        fs.unlink('config.xml', function(err){
            if(err) {
                error('`rm config.xml` failed with code ' + errr.errno + '. Try to run it later.', 'red');
            }
            else {
                /* and put better one inside `www` directory */
                this.template('_config.xml', path.join('www', 'config.xml'));

                cb();
            }
        });

    }.bind(this));
};