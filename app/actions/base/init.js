var fs = require('fs');
var http = require('http');
var AdmZip = require('adm-zip');

var prompts = require('./prompts');
var myUtils = require('../../../util');

var tmpName = 'ionic.master.tmp';
var tmpZipPath = tmpName + '.zip';
var srcZipPath = 'http://code.ionicframework.com/0.9.26/ionic-v0.9.26.zip';

var setIonicProject = function (cb) {
    myUtils.success('Generating Ionic project...');

    /* change current working directory */
    process.chdir(this.app.nameSlug);

    var file = fs.createWriteStream(tmpZipPath);

    http.get(srcZipPath, function (response) {

        /* dump tarball to file */
        response.pipe(file);

        file.on('finish', function() {

            /* overwrite files in default www directory */
            var zip = new AdmZip('./' + tmpZipPath);
            zip.extractAllTo('www');

            /* clean after all */
            fs.unlink(tmpZipPath, function(err){

                if(!err) {
                    cb();
                }
            });
        });
    });
};

module.exports = function () {
    var cb = this.async();

    myUtils.success('Basic informations:');

    this.prompt(prompts.app, function (props) {

        this.app = props;
        this.app.nameCamel = this._.camelize(this.app.name);
        this.app.nameSlug = this._.slugify(this.app.name);
        this.app.nameDomain = 'io.cordova.ionicframework';

        myUtils.success('Development related:');

        this.prompt(prompts.misc, function (props) {

            this.misc = props;

            /* create Cordova project */
            var spawnCordovaProjectArgs = ['create', this.app.nameSlug, this.app.nameDomain, this.app.nameCamel];

            myUtils.success('Generating Cordova project...');

            this.spawnCommand('cordova', spawnCordovaProjectArgs).on('close', function (code) {

                /* something goes wrong, give up */
                if (code !== 0) {
                    myUtils.error('`cordova ' + spawnCordovaProjectArgs.join(' ') + '` failed. See error above.');
                }
                else {
                    /* or setup new Ionic project */
                    setIonicProject.call(this, cb);
                }

            }.bind(this));

        }.bind(this));

    }.bind(this));
};