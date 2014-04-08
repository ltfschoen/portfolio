// load the .env variables to hide secret keys
var dotenv = require('dotenv-node');
new dotenv();

var mongoose = require('mongoose');

// load secret keys (i.e. to connect to mongolab database)
var dbUser = process.env.DB_USER;
var dbPass = process.env.DB_PASS;

// add connection string to mongolab database 'projects'
mongoose.connect('mongodb://' + dbUser + ':' + dbPass + '@ds049347.mongolab.com:49347/projects');

// export the connection
module.exports = mongoose.connection;