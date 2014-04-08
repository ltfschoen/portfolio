/**
 * Module dependencies.
 */

// export application from this file to server.js in the form 
// of a function taking 'projects' as single argument
// db added as argument for sessions
module.exports = function (projects, db) {

	// load the modules in package.json
	// http server modules loaded seperately in server.js
	// passing 'projects' into the route handling functions
	var express = require('express');
	// require Connect-Mongo and store in a variable
    // pass Express into Connect-Mongo
    var MongoStore = require('connect-mongo')(express); 

    // add Passport for login
	var passport = require('./auth');

	var routes = require('./routes')(projects);
	var user = require('./routes/user');
	var path = require('path');

	// use express module to create new app
	var app = express();

	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));

    // setup Express to use Sessions
    // add the cookieParser software to read the cookies that browser sending to the server
    app.use(express.cookieParser());

	// session password
	var dbSessionPass = process.env.DB_SESSION_SECRET;

    // add session, object argument, configures session
    // add store property tells Express where to store our session
    // in new MongoStore instance, whose constructor takes an object
    // set property for mongoose_connection (no connection available)
    // pass it in (also adding 'db' as another argument on line 6)

    app.use(express.session({
    	secret: 'test',
        store: new MongoStore({
        	mongoose_connection: db
        })
    }));  

	// add Passport as Middleware to this app
	// initialize to startup Passport 
	app.use(passport.initialize());
	// tell Passport to use the Sessions in Express and store them
	app.use(passport.session());

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

	// add Passport routes
	// route for login form
	app.get('/login', routes.login);
	// route for handling login form. arguements: strategy, object
	// where object defines two redirect routes for fail/success login
	app.post('/login', passport.authenticate('local', {
		// login failure redirect to login form
		failureRedirect: '/login', 
		// login success redirect to user page 
		successRedirect: '/user'
	}));
	// route for display user login info after successful login

	app.get('/user', routes.user);

	return app;

};
