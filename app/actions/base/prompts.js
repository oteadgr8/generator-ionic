var user = require('../../../node_modules/yeoman-generator/lib/actions/user');

module.exports = (function () {
    var prompts = {
        app: [
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
            },
            {
                type: 'input',
                name: 'user',
                message: 'Application author name:',
                default: (user.git.username || 'Ionic Team')
            },
            {
                type: 'input',
                name: 'www',
                message: 'Application www:',
                default: ''
            }
        ],
        misc: [
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