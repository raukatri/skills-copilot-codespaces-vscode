// Create web server
// Load the modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime');

// Create server
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = path;
}).listen(8888);