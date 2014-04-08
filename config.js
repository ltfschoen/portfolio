// config file used for mocha testing purposes only at the moment 
// load secret keys 
var dbUser = process.env.DB_USER;
var dbPass = process.env.DB_PASS;

module.exports = {
	db: {
		production: 'mongodb://localhost/ltfschoen-prod',
   		development: 'mongodb://localhost/ltfschoen-dev',
   		test: 'mongodb://' + dbUser + ':' + dbPass + '@ds049347.mongolab.com:49347/projects'
   	}
};