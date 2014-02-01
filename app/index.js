'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var utils = require('./utils');
var prompts = require('./prompts');

var IonicGenerator = module.exports = function IonicGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall:options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(IonicGenerator, yeoman.generators.Base);

IonicGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    utils.say('Basic informations:');

    this.prompt(prompts.basics, function (props) {

        this.app = props;

        utils.say('Application details:');

        this.prompt(prompts.cordova, function (props) {
            this.cordova = props;

            utils.say('Scaffold options:');

            this.prompt(prompts.miscs, function (props) {
                this.miscs = props;

                console.log(this.app, this.cordova, this.miscs);
                cb();
            }.bind(this));

        }.bind(this));

    }.bind(this));
};

IonicGenerator.prototype.app = function app() {
    this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
};

IonicGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
};
