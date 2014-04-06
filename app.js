/**
 * Module dependencies.
 */

// load the project module
var project = require('./project');

// set data for project
var firstProjectData = {
	number: 1,
	name: 'Littlehumans',
	description: 'Midwifery web app',
	stack: 'Ruby on Rails',
	actualStart: Date.now(),
	actualFinish: Date.now()
};

// define new variable. using project function returned from the project module. create the first project data (no longer just retrieving it already created from module)
var firstProject = project.create(firstProjectData);

// calling the triggerStart method on the object
firstProject.triggerStart();

// output results to console
console.log(firstProject.getInformation());

// repeat for second project
var secondProjectData = {
	number: 2,
	name: 'Trendmyhunch',
	description: 'Idea web app',
	stack: 'Ruby on Rails',
	actualStart: Date.now(),
	actualFinish: Date.now()
};

var secondProject = project.create(secondProjectData);

console.log(secondProject.getInformation());
// call first project to prove that seperate project object is being retrieved without caching issues
console.log(firstProject.getInformation());
console.log("Project count: " + project.getCount());
console.log("Stacks used: " + project.getStack());

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
