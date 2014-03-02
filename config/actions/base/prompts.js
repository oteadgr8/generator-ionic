var user = require('../../../node_modules/yeoman-generator/lib/actions/user');

module.exports = (function () {
    var prompts = [
        {
            type: 'checkbox',
            name: 'preferences',
            message: 'Enable this values in Cordova config:',
            choices: [
                {
                    name: "fullscreen",
                    checked: true
                },
                {
                    name: "webviewbounce",
                    checked: false
                },
                {
                    name: "UIWebViewBounce",
                    checked: false
                },
                {
                    name: "DisallowOverscroll",
                    checked: true
                }
            ]
        }
    ];

    return prompts;
})()