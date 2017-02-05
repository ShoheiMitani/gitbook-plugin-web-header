var fs = require('fs');
var path = require('path');

module.exports = {
    // Map of hooks
    hooks: {
        "finish" : function () {
            // Get configuration.
            var filePath = this.options.pluginsConfig.webheader.headerPath;
            var header   = path.join(process.cwd(), filePath);
            var height   = this.options.pluginsConfig.webheader.height || 40;

            fs.readFile(header, 'utf8', function (err, html) {
                if (err) {
                    console.log('Header html file was not found')
                } else {
                    // Adjust header width.

                    $('.book-body').css('top', height + 'px');
                    $('.book-summary').css('top',height + 'px');
                    // Add customize header html.
                    $('.book-summary').before($(html));
                }
            });
        }
    },
};
