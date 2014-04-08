// include the original app.js file 
var app = require('../../app');

// include the sample data in /test/data/index.js
var projects = require('../data');

// include the original db.js for mongoose connection to mongolab database
var db = require('../../db');

// export the app bound to these 'projects'
// set to result of calling app with the 'projects'
// additionally pass in db for sessions with mongolab
module.exports = app(projects, db);