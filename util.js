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

module.exports = (function(){
    return {
        success: success,
        error: error,

        remove : function(path) {
            fs.unlink(path, function(err){
                if(err) {
                    error('`rm config.xml` failed with code ' + errr.errno + '. Try to run it later.', 'red');
                }
            });
        }
    };
})();