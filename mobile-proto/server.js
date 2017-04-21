var static = require('node-static');
var file = new static.Server('./build');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
        console.log("Request URL: "+request.url);
    }).resume();
}).listen(3000);
