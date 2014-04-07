// include the original app.js file 
var app = require('../../app');

// include the sample data in /test/data/index.js
var projects = require('../data');

// export the app bound to these 'projects'
// set to result of calling app with the 'projects'
module.exports = app(projects);