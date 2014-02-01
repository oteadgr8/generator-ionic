var user = require('../node_modules/yeoman-generator/lib/actions/user');

module.exports = (function() {
    var prompts  = {
        basics : [
            {
                type: 'input',
                name: 'name',
                message: 'Application name:',
                default: 'Yeoman Ionic Generator application'
            },
            {
                type: 'input',
                name: 'desc',
                message: 'Application description:',
                default: ''
            },
            {
                type: 'input',
                name: 'email',
                message: 'Application author email:',
                default: (user.git.email || 'example@example.com')
            }
        ],

        cordova : [
            {
                type: 'checkbox',
                name: 'platforms',
                message: 'Target platforms:',
                choices: [
                    {
                        name: "Android 4+",
                        checked: true
                    },
                    {
                        name: "iOS",
                        checked: true
                    }
                ]
            },
            {
                type: 'checkbox',
                name: 'plugins',
                message: 'Plugins to use:',
                choices: [
                    {
                        name: "Device (Basic device information)",
                        checked: false
                    },
                    {
                        name: "Network connection",
                        checked: false
                    },
                    {
                        name: "Battery status",
                        checked: false
                    },
                    {
                        name: "Accelerometer",
                        checked: false
                    },
                    {
                        name: "Compass",
                        checked: false
                    },
                    {
                        name: "Geolocation",
                        checked: false
                    },
                    {
                        name: "Camera",
                        checked: false
                    },
                    {
                        name: "Media",
                        checked: false
                    },
                    {
                        name: "Capture",
                        checked: false
                    },
                    {
                        name: "File API",
                        checked: false
                    },
                    {
                        name: "Notifications (via dialog box or vibration)",
                        checked: false
                    },
                    {
                        name: "Contacts",
                        checked: false
                    },
                    {
                        name: "Globalization",
                        checked: false
                    },
                    {
                        name: "Splashscreen",
                        checked: false
                    },
                    {
                        name: "InAppBrowser (Open new browser windows)",
                        checked: false
                    },
                    {
                        name: "Debug console",
                        checked: false
                    }
                ]
            },
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
        ],
        miscs : [
            {
                type: 'confirm',
                name: 'useSASS',
                message: 'Add SASS support?',
                default: true
            },
            {
                type: 'confirm',
                name: 'useCoffee',
                message: 'Add Coffeescript support?',
                default: true
            },
            {
                type: 'confirm',
                name: 'navbarScaffold',
                message: 'Add navigation bar by default?',
                default: true
            }
        ]
    };

    return prompts;
})()