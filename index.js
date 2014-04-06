// module inclusion
var http = require('http'),
	express = require('express');

// use express module to create new app
var app = express();

// define routes for app
// get request
// callback function with arguments request and response objects
app.get('/', function(req, res) {
	// handle request calling 'end' method of response object
	// output text
	res.end('Portfolio');
});

// startup the server using methods of the http module
// call listen method and tell it port to listen on
http.createServer(app).listen(3000);