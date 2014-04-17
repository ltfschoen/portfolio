// main passport module configuration
var passport = require('passport'); 

// extract strategy property from passport-local module
// allows multiple strategies for logging into website
var LocalStrategy = require('passport-local').Strategy; 

// admin password
var passportAdminPass = process.env.PASSPORT_ADMIN_PASS;

// LocalStrategy for implementing own customer login logic
passport.use(new LocalStrategy(
	// pass in function to handle logins
	// done called when authenticated user or rejected
	function(username, password, done) {
		if (username === 'admin' && password === passportAdminPass) {
			// if login successful return done and object with user info
			return done(null, {username: 'admin'});
		}
		// if unsuccessful return false
		return done(null, false);
	}
));

// two functions defined to store user in session
passport.serializeUser(function(user, done) {
	done(null, user.username);
});

passport.deserializeUser(function(username, done) {
	done(null, {username: username});
});

module.exports = passport;