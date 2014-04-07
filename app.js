/**
 * Module dependencies.
 */

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

// add Middleware to change default HTTP Headers from displaying 
// 'X-Powered-By: Express' in Chrome Postman by default.
// function with three arguments (request, response, next)
// 'next' argument is required to ensure the server returns  
// the next piece of Middleware
app.use(function (req, res, next) {
	// reset the 'X-Powered-By:' Header
	res.set('X-Powered-By', 'Project Tracker');
	// must call the 'next' function to other Middleware may run
	next();
});

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// define routes for app. get request
// callback function with arguments request object
// 'number' variable used as param passed to function
// when user visits URL is defined here
app.get('/project/:number', routes.project);

// add RESTful web services including a
// put request to mark specific projects as completed
// using function named 'completed'
app.put('/project/:number/completed', routes.completed);

// add route called 'list' to view list.jade
// define function to handle this list. add function to routes module
app.get('/list', routes.list);

//app.get('/', routes.index);
app.get('/users', user.list);

// startup the server using methods of the http module
// call listen method and tell it port to listen on
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
