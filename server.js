// load the .env variables to hide secret keys
var dotenv = require('dotenv-node');
new dotenv();

var http = require('http');

// import seed data from /data/index.js as an object
// to be passed to the route handling function /routes/index.js
var projects = require('./data');

// load db.js for mongoose connection to mongolab database
var db = require('./db');

// load and tie the app.js file to this server.js file
// passing 'projects' into the route handling functions
var app = require('./app')(projects);

// startup the server using methods of the http module
// call listen method and tell it port to listen on
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});