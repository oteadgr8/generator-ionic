'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

/* load base action */
var actionBase = require('./actions/base/init');

var CordovaGenerator = module.exports = function CordovaGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    /* might be undefined, pass it anyway and check later */
    this.app = options.app;
};

util.inherits(CordovaGenerator, yeoman.generators.Base);

CordovaGenerator.prototype.platforms = actionBase;