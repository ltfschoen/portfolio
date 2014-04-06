
/*
 * GET home page.
 */

// run with http://localhost:3000/project/1

// use PostMan to customise HTTP request to generate and test PUT requests to the server
// chrome-extension://fdmmgilgnpjigdojojpjoooidkmcomcm/index.html

// import seed data from /data/index.js as an object
var projects = require('../data');

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

// define function to be handled to return project info
// to browser using json method (instead of render)
// passing in the project information
// and calling the function
// use URL variable to find project information
// defined in app.js ('number' is variable determining 
// which project to load in browser
exports.project = function(req, res){
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

exports.completed = function (req, res){
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