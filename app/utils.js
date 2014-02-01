var colors = require('colors');

module.exports = (function() {
    return {
        say : function(message) {
            console.log('\r\n' + message['green']);
        }
    }
})()