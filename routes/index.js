
/*
 * GET home page.
 */

// run with http://localhost:3000/firstProject

// require index.js in project directory
var project = require('../project');

// create new projects based on project module 
// set data for projects 
var firstProject = project.create({
	number: 1,
	name: 'Littlehumans',
	description: 'Midwifery web app',
	stack: 'Ruby on Rails',
	actualStart: Date.now(),
	actualFinish: Date.now()
});

var secondProject = project.create({
	number: 2,
	name: 'Trendmyhunch',
	description: 'Idea web app',
	stack: 'Ruby on Rails',
	actualStart: Date.now(),
	actualFinish: Date.now()
});

// calling the triggerStart method on the object
firstProject.triggerStart();

// output results to console
console.log(firstProject.getInformation());
console.log(secondProject.getInformation());
console.log("Project count: " + project.getCount());
console.log("Stacks used: " + project.getStack());

// define functions to return project info
// to browser using json method (instead of render)
// passing in the project information
// and calling the function
exports.firstProject = function(req, res){
  res.json(firstProject.getInformation());
};

exports.secondProject = function(req, res){
  res.json(secondProject.getInformation());
};