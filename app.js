/**
 * Module dependencies.
 */

// export application from this file to server.js in the form 
// of a function taking 'projects' as single argument
module.exports = function (projects) {

	// load the modules in package.json
	// http server modules loaded seperately in server.js
	// passing 'projects' into the route handling functions
	var express = require('express');
	var routes = require('./routes')(projects);
	var user = require('./routes/user');
	var path = require('path');

	// use express module to create new app
	var app = express();

	// all environments

	// Nodejitsu uses this port 5000 according to jitsu log 
	if ('production' == app.get('env')) {
	  app.set('port', process.env.PORT || 5000);
	} else {
	  app.set('port', process.env.PORT || 3000);
	};

	// // test what port the server listens on in production and then hardcode
	// var port = Number(process.env.PORT || 5000);
	// app.listen(port, function() {
	//   console.log("Listening on " + port);
	// });

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

	// add additional route to view list in JSON
	app.get('/list/json', routes.listJSON);

	// add stacks list
	app.get('/stacks', routes.listStacks);

	return app;

};
