var spawn = require('child_process').spawn;
var path = require('path');

var prompts = require('./prompts');
var myUtils = require('../../../util');

var baseUrl = 'org.apache.cordova.%s';

module.exports = function() {

    var cb = this.async();
console.log(this.app);
    myUtils.success('Enable plugins:');

    this.prompt(prompts, function (props) {

        var plugins = props.plugins;

        if(plugins.length > 0) {

            /* 'pluginize' plugins names (lowercase, space replaced with '-') */
            for(var i = 0, l = props.plugins.length; i < l; i++) {
                plugins[i] = baseUrl.replace('%s', myUtils.pluginize(plugins[i]));
            }

            /* add them of course */
            this.spawnCommand('cordova', ['plugin', 'add'].concat(plugins), function(code){

                if(code !== 0) {
                    myUtils.error('Cannot run `cordova plugin add ' + plugins.join(' ') + '`. Check messages above.');
                }

                cb();
            });
        }
        else {

            /* no plugins, do nothing... */
            cb();
        }

    }.bind(this));
};