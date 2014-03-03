var path = require('path');

var prompts = require('./prompts');
var myUtils = require('../../../util');

/*
 * use native spawn instead of spawnCommand, because Yeoman version I can't handle stdout
 * @todo: Check why spawnCommand doesn't work
 * */
var spawn = require('child_process').spawn;

/* because there is no output in JSON format, we need to parse it */
var getPlatforms = function(data, type) {
    var line = { 'installed' : 0, 'available' : 1 };
    var platforms = data[line[type]].split(this._.capitalize(type) + ' platforms:')[1].split(', ');

    for(var i = 0, l = platforms.length; i < l; i++) {
        platforms[i] = this._.trim(platforms[i]).split(' ')[0];
    }

    return platforms;
};

/* prepare dynamic list of platforms which user can install */
var setChoices = function(available, tested) {
    var choices = [];

    for(var i = 0, l = available.length; i < l; i++) {
       choices.push({
            name : available[i],
            checked : this._.contains(tested, available[i])
       });
    }

    return choices;
};

/* platforms which are tested and playing well with Ionic */
var tested  = ['android', 'ios'];

module.exports = function () {
    var cb = this.async();

    myUtils.success('Enable platforms:');

    var cordovaPlatformList = spawn('cordova', ['platform', 'ls'])

    cordovaPlatformList.stdout.setEncoding('utf8');
    cordovaPlatformList.stdout.on('data', function(data){

        /* split by newline and remove last empty value */
        data = data.split('\n');
        data.pop();

        /* little bit hacky, but actually it works */
        var installed = getPlatforms.call(this, data, 'installed');
        var available = getPlatforms.call(this, data, 'available');

        prompts[0].choices = setChoices.call(this, available, tested);

        this.prompt(prompts, function (props) {

            this.platforms = props.platforms;

            /* add platforms to project */
            spawn('cordova', ['platform', 'add'].concat(this.platforms)).on('close', function (code) {

                if(code !== 0) {
                    myUtils.error('`cordova platform add ' + this.platforms.join(' ') + '` failed. Check message above.')
                }

                cb();

            }.bind(this));

        }.bind(this));

    }.bind(this));
};