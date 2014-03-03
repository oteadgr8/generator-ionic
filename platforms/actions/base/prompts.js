var user = require('../../../node_modules/yeoman-generator/lib/actions/user');

module.exports = (function () {
    var prompts = [
        {
            type: 'checkbox',
            name: 'platforms',
            message: 'Target platforms (checked by default are compatible with Ionic Framework):',
            choices: null
        }
    ];

    return prompts;
})()