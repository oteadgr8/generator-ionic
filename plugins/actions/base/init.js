var spawn = require('child_process').spawn;
var path = require('path');

var prompts = require('./prompts');
var myUtils = require('../../../util');

var baseUrl = 'org.apache.cordova.%s';

module.exports = function() {

    var cb = this.async();

    myUtils.success('Enable plugins:');

    this.prompt(prompts, function (props) {

        var plugins = props.plugins;

        for(var i = 0, l = props.plugins.length; i < l; i++) {
            plugins[i] = baseUrl.replace('%s', myUtils.pluginize(plugins[i]));
        }

        this.spawnCommand('cordova', ['plugin', 'add'].concat(plugins), function(code){

            if(code !== 0) {
                myUtils.error('Cannot run `cordova plugin add ' + plugins.join(' ') + '`. Check messages above.');
            }

            cb();
        });

    }.bind(this));
};