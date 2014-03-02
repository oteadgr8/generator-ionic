var fs = require('fs');
var chalk = require('chalk');

var chalkError = chalk.bold.red;
var chalkSuccess = chalk.bold.green;

var success = function(message) {
    message = '\r\n' + chalkSuccess(message);

    console.log(message);
    return message;
};

var error = function(message) {
    message = '\r\n' + chalkError(message);

    console.log(message);
    return message;
};

var pluginize = function(str) {
    return str.toLowerCase().replace(/ /, '-');
}

module.exports = (function(){
    return {
        success: success,
        error: error,

        pluginize : pluginize
    };
})();