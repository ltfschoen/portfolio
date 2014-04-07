var app = require('./helpers/app');

// require npm testing modules
var should = require('should');
var supertest = require('supertest');

// write unit tests 
// pass into describe: label, anonymous function
describe('projects', function () {
	// individual unit tests

	it('should return valid project data for project 1', 
	function (done) {
		// run tests with 'mocha'
		// use supertest calling supertest fn and passing in app
		// chain calls to supertest

		supertest(app)
		.get('/project/1')
		.expect(200) // expected ok 200 response
		// take chain. send to supertest to collect response
		// anonymous function with single argument
		.end(function (err, res) {
			// assert response was as expected
			// use 'should' module to provide fn to assert 
			res.status.should.equal(200);
			done(); // only if response certified equal to 200
		});
	});

	it('should return error for invalid project', 
	function (done) {
		// build up a HTTP request, send it, receive response
		
		supertest(app)
		.get('/project/999999') // never in sample data
		.expect(404)
		.end(function (err, res) {
			res.status.should.equal(404);
			done();
		});
	});

	it('should mark a project as completed',
	function (done) {
		
		supertest(app)
		.put('/project/1/completed')
		.expect(200)
		.end(function (err, res) {
			res.status.should.equal(200); // assert test was valid
			res.body.status.should.equal('done'); // inspect response body

			// if above assertions passed, test if record actually changed
			supertest(app)
			.get('/project/1')
			.expect(200)
			.end(function (err, res) {
				res.status.should.equal(200);
				// check actualFinish property is a timestamp, not undefined
				res.body.actualFinish
				.should.not.equal(undefined);

				done();
			});
		});
	});

	it('should display list of projects in html format',
	function (done) {
		
		supertest(app)
		.get('/list')
		.expect(200)
		.end(function (err, res) {
			res.status.should.equal(200);
			done();
		});
	});

	it('should display list of projects in json format',
	function (done) {
		
		supertest(app)
		.get('/list/json')
		.expect(200)
		.end(function (err, res) {
			res.status.should.equal(200);
			done();
		});
	});

});