/**
 * Module dependencies.
 */

// load the project module
var project = require('./project');

// set data for portfolio
project.setNumber(1);
console.log(project.setNumber);
project.setName('Portfolio');
project.setDescription('Portfolio');
project.setStack('Node.js');

// get data and display it. must use getInfo() with parenthesise!
console.log(project.getInfo());

// load the modules in package.json
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

// use express module to create new app
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// define routes for app. get request
// callback function with arguments request object
app.get('/', routes.index);
app.get('/users', user.list);

// startup the server using methods of the http module
// call listen method and tell it port to listen on
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
