var user = require('../../../node_modules/yeoman-generator/lib/actions/user');

module.exports = (function () {
    var prompts = [
        {
            type: 'checkbox',
            name: 'plugins',
            message: 'Plugins to use:',
            choices: [
                {
                    name: "Device",
                    checked: false
                },
                {
                    name: "Network information",
                    checked: false
                },
                {
                    name: "Battery status",
                    checked: false
                },
                {
                    name: "Device motion",
                    checked: false
                },
                {
                    name: "Device orientation",
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
                    name: "Media capture",
                    checked: false
                },
                {
                    name: "Media",
                    checked: false
                },
                {
                    name: "File",
                    checked: false
                },
                {
                    name: "File transfer",
                    checked: false
                },
                {
                    name: "Dialogs",
                    checked: false
                },
                {
                    name: "Vibration",
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
                    name: "InAppBrowser",
                    checked: false
                },
                {
                    name: "Console",
                    checked: false
                }
            ]
        }
    ];

    return prompts;
})()