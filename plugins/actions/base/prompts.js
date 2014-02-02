var user = require('../../../node_modules/yeoman-generator/lib/actions/user');

module.exports = (function () {
    var prompts = [
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
        }
    ];

    return prompts;
})()