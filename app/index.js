'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

/* load base action */
var actionBase = require('./actions/base/init');

var IonicGenerator = module.exports = function IonicGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    var afterInstallDependencies = function () {

        /* change current working directory */
        process.chdir(this.app.nameSlug);

        this.invoke('ionic:platforms', {options: {}}, function () {

            this.invoke('ionic:plugins', {options: {}}, function () {

                this.invoke('ionic:config', {options: {}});

            }.bind(this));

        }.bind(this));

    }.bind(this)

    this.on('end', function () {
        this.installDependencies({
            skipInstall: options['skip-install'],
            callback: afterInstallDependencies
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(IonicGenerator, yeoman.generators.Base);

IonicGenerator.prototype.base = actionBase;

IonicGenerator.prototype.app = function app() {
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
};

IonicGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
};
