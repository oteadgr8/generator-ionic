var user = require('../../../node_modules/yeoman-generator/lib/actions/user');

module.exports = (function () {
    var prompts = [
        {
            type: 'checkbox',
            name: 'platforms',
            message: 'Target platforms:',
            choices: [
                {
                    name: "android",
                    checked: true
                },
                {
                    name: "ios",
                    checked: true
                }
            ]
        }
    ];

    return prompts;
})()