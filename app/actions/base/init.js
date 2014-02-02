var prompts = require('./prompts');
var myUtils = require('../../../util');

module.exports = function() {
    var cb = this.async();

    myUtils.success('Basic informations:');

    this.prompt(prompts.app, function (props) {

        this.app = props;
        this.app.nameCamel = this._.camelize(this.app.name);
        this.app.nameSlug = this._.slugify(this.app.name);
        this.app.nameDomain = 'io.cordova.ionicframework';

        myUtils.success('Development related:');

        this.prompt(prompts.misc, function(props) {

            this.misc = props;

            /* create Cordova project */
            var spawnCordovaProjectArgs = ['create', this.app.nameSlug, this.app.nameDomain, this.app.nameCamel];

            myUtils.success('Generating Cordova project...');

            this.spawnCommand('cordova', spawnCordovaProjectArgs).on('close', function(code) {

                /* something goes wrong, give up */
                if(code !== 0) {
                    myUtils.error('`cordova ' + spawnCordovaProjectArgs.join(' ') + '` failed. See error above.');
                }

                cb();

            }.bind(this));

        }.bind(this));

    }.bind(this));
};