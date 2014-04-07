
/*
 * GET home page.
 */

// wrap this file into a module.exports function with 'projects'
// as single argument
module.exports = function (projects) {

	// require index.js in project directory
	var project = require('../project');
	console.log("\nProject seed data: " + "\n");
	console.log(projects);
	// loop through and process all imported seed data
	// turning properties into objects
	for(var number in projects) {
		// set each object property to and object created by 
		// project module
		projects[number] = project.create(projects[number]); 
	}

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
		}  
	};

	functions.completed = function (req, res){
		var number = req.param('number'); 

		if (typeof projects[number] === 'undefined') {
			res.status(404).json({status: 'error'});
		} else {
			// use triggerCompleted() method to change project record
			projects[number].triggerFinish();
			// send a status of done when complete 
			res.json({status: 'done'});
		}  
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
		}
		res.json(projectData);
	};

	// return functions from this function
	return functions;

};