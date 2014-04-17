
/*
 * GET home page.
 */

// include schema for 'projects' to connect to mongo labs database
// used to save records to the database 
var ProjectSchema = require('../schemas/project');
// require core module 'events' and get property EventEmitter from module
var Emitter = require('events').EventEmitter;

// create new emitter and assign to new instance of Emitter
var projectEmitter = new Emitter();

// create a listener for the 'finished' event
// listeners will record the data in the mongo lab db 
// args: name of event, function taking 'project' as single arg
projectEmitter.on('finished', function(project) {
	// save data to the mongo lab database 'projects'
	// with timestamp 
	var record = new ProjectSchema(
		project.getInformation()
	);
	
	// takes a function and argument for any errors that occur
	record.save(function(err) {
		if (err) {
			console.log(err);
		};
	});
});

// create a second listener for the 'finished' event
projectEmitter.on('finished', function(project) {
	console.log("Project finished: " + project.data.number);
});

// wrap this file into a module.exports function with 'projects'
// as single argument
module.exports = function (projects) {

	// require index.js in project directory
	var project = require('../project');
	//console.log("\nProject seed data: " + "\n");
	//console.log(projects);

	// loop through and process all imported seed data
	// turning properties into objects
	for(var number in projects) {
		// set each object property to and object created by 
		// project module
		projects[number] = project.create(projects[number]); 
	};

	// output results to console
	console.log("\nProject count: " + project.getCount() + "\n");

	// return objects with a new variable called 'functions' set to blank object literal (replace 'exports' with 'functions')
	var functions = {};

	// define function to be handled to return project info
	// to browser using json method (instead of render)
	// passing in the project information
	// and calling the function
	// use URL variable to find project information
	// defined in app.js ('number' is variable determining 
	// which project to load in browser
	functions.project = function(req, res){
		// source of 'number' param defined in app.js
		var number = req.param('number'); 
		
		// sessions are available in this Express app
		// stored in mongo lab database
		// track last project user viewed, display it on project list page
		// use request property called 'session' and set it
		req.session.lastNumber = number; 

		// use 'number' to perform look-up only 
		// if valid project specified. 
		// check if project info is undefined
		if (typeof projects[number] === 'undefined') {
			// return error 404 with status object
			res.status(404).json({status: 'error'});
		} else {
			// else fetch record at this 'number'
			// and get info from project, sending info back as JSON
			res.json(projects[number].getInformation());
		};
	};

	functions.completed = function (req, res){
		var number = req.param('number'); 

		if (typeof projects[number] === 'undefined') {
			res.status(404).json({status: 'error'});
		} else {
			// use triggerCompleted() method to change project record
			projects[number].triggerFinish();

			// emit an event just after project has finished
			// args: event type, type of data to pass (project itself)
			projectEmitter.emit('finished', projects[number]);
			
			// send success status immediately confirming project finished
			// to avoid user waiting for delays of record being saved first
			res.json({status: 'success'});	
		}; 
	};


	functions.index = function (req, res) {
		res.render('index', {
			title: 'Portfolio', // defined in index.jade
		});
	};

	functions.list = function (req, res){
		// handler fn to call render method of the response object
		// two arguments: view, object with data to pass to view
		res.render('list', {
			title: 'All Projects', // defined in list.jade
			projects: projects
		});
	};

	// list all project data as valid JSON at:
	// http://localhost:3000/list/json
	functions.listJSON = function (req, res){
		var projectData = [];

		// iterate over all projects to get project data and put it into an array. avoids invalid JSON file with numbers as property names.
		for(var number in projects) {
			projectData.push(projects[number].getInformation());
		};
		res.json(projectData);
	};

	functions.listStacks = function (req, res) {
		// to sort by stacks field from mongo lab database
		// use setOptions method with arguments:
		//   - sort, by field
		ProjectSchema.find()
		.setOptions({sort: 'stack'})
		// execute query using exec fn with arguments: 
		//   - function + args (error, results)
		.exec(function(err, listStacks) {
			if (err) {
				console.log(err);
				// tell browser of error, else render results
				res.status(500).json({status: 'failure'});
			} else {
				// render jade view called 'stacks'
				res.render('stacks', {
					title: 'List of Stacks for Completed Projects',
					listStacks: listStacks,
					// pass in last viewed project (for sessions)
					lastNumber: req.session.lastNumber
				});
			};
		});
	};

	// define two route handlers for 'user' and 'login' for Passport
	functions.login = function(req, res) {
		// call render method of response object
		// pass in two args: login (jade view), title
		res.render('login', {title: 'Log in'});
	};

	functions.user = function(req, res) {
		// check the user property session of Passport
		// redirect user to login page if not actually there
		if (req.session.passport.user === undefined) {
			res.redirect('/login');
		} else {
		// render user page if valid user. call 'user' view. 
		// pass in title, pass in user info
			res.render('user', {
				title: 'Welcome!',
				user: req.user
			});
		};
	};

	// return functions from this function
	return functions;

};