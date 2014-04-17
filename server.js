// load the .env variables to hide secret keys
var dotenv = require('dotenv-node');
new dotenv();

var http = require('http');

// import seed data from /data/index.js as an object
// to be passed to the route handling function /routes/index.js
var projects = require('./data');

// load db.js for mongoose connection to mongolab database
var db = require('./db');

// include repl core module
var repl = require('repl');

// include optimist
// read argv property from optimist
var argv = require('optimist').argv;

// load and tie the app.js file to this server.js file
// passing 'projects' into the route handling functions
// pass in db for sessions
var app = require('./app')(projects, db);

// startup the server using methods of the http module
// call listen method and tell it port to listen on
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// assign to variable allows work with it
// set prompt property of this object.
// this repl living in its own context. context is node env with no variables attached
var prompt = repl.start({prompt: 'projects> '});

// to use the data of this server. assign the 'data' to the context of this repl.
// context is where we can set properties we want to make as global variables in this repl
// set it to the data we have here, which is 'projects'
prompt.context.data = projects;


// node already keeps track of entries on command line
// check what node keeps track of
// test by passing arguments/flags
// test with 'node server --project 1 --name Littehumans'

// returns an array
// node itself, path to file being run, flags being passed
// try get data back in an object (easier to look up) instead of array
// install ‘optimist’ module with 'npm install —-save optimist'
console.log(argv); // compare optimist argv property with node process argv below 
console.log(process.argv);

// add logic for handling .argv
// check project and name are both set before doing anything with these values
if (argv.project && argv.name) {
	// if properties are set. set data in the project
	// lookup project by project number. 
	// then set 'name' property of data within this project.
	projects[argv.project].data.name = argv.name
}
