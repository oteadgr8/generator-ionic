var path = require('path');

var prompts = require('./prompts');
var myUtils = require('../../../util');

module.exports = function () {
    var cb = this.async();

    myUtils.success('Enable platforms:');

    this.prompt(prompts, function (props) {

        this.platforms = props.platforms;

        /* add platforms to project */
        this.spawnCommand('cordova', ['platform', 'add'].concat(this.platforms)).on('close', function (code) {

            if(code !== 0) {
                myUtils.error('`cordova platform add ' + this.platforms.join(' ') + '` failed. Check message above.')
            }

            cb();

        }.bind(this));

    }.bind(this));
};