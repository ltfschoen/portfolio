// introduction:
// import this into each test file
// interacting direct with mongo lab db for tests
// no mocking library being used 

// clearing database before each test.
// since using actual mongo lab db for tests 
// must clear db before each test. 
// ensures existing data not interfere with test

'use strict';

/*
* Modified from https://github.com/elliotf/mocha-mongoose
* Followed guide as described at http://www.scotchmedia.com/tutorials/express/authentication/1/06
*/

var config = require('../../config'); // connection to mongo db for testing 
var mongoose = require('mongoose');

// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

beforeEach(function (done) {

 function clearDB() {
   for (var i in mongoose.connection.collections) {
     mongoose.connection.collections[i].remove(function() {});
   }
   return done();
 }

 if (mongoose.connection.readyState === 0) {
   mongoose.connect(config.db.test, function (err) {
     if (err) {
       throw err;
     }
     return clearDB();
   });
 } else {
   return clearDB();
 }
});

afterEach(function (done) {
 mongoose.disconnect();
 return done();
});
