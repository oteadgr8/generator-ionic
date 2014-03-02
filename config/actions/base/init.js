var spawn = require('child_process').spawn;
var path = require('path');

var prompts = require('./prompts');
var myUtils = require('../../../util');

module.exports = function() {

    myUtils.success('Application details:');

    this.prompt(prompts.cordova, function (props) {

        this.cordova = props;

        myUtils.success('Scaffold options:');

        this.prompt(prompts.miscs, function (props) {

            this.miscs = props;

            utils.say('Generating Cordova project...');

            /* create Cordova project */
            var spawnCordovaProjectArgs = ['create', this.app.nameSlug, this.app.nameDomain, this.app.nameCamel];

            spawn('cordova', spawnCordovaProjectArgs).on('close', function(code) {

                /* something goes wrong, give up */
                if(code !== 0) {
                    utils.say('`cordova ' + spawnCordovaProjectArgs.join(' ') + '` failed. Try to run by yourself.', 'red');
                    cb();
                    return;
                }

                /* change current working directory */
                process.chdir(this.app.nameSlug);

                /* remove Cordova config */


                /* and put better one inside `www` directory */
                this.template('_config.xml', path.join('www', 'config.xml'));

                /* add platforms to project */
                spawn('cordova', ['platform', 'add'].concat(this.cordova.platforms)).on('close', function(){

                    /* add plugins */
                    cb();
                }.bind(this));

            }.bind(this));



        }.bind(this));

    }.bind(this));
};