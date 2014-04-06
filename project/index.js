// export single function using module.exports function
// seperate function scopes to avoid issue of multiple 
// instances retrieving the same original data
// due to modules caching when loaded for first time.
// each time this function is called a new variable
// function scope is created so data for each project 
// is kept seperate.
module.exports = function (info) {

	// define object values with placeholders
	var values = {
		number: null,
		name: null,
		description: null,
		stack: null,
		actualStart: null,
		actualFinish: null
	};

	// setter
	// loop over each property of variable 'values' 
	// only want valid predefined object properties
	for(var prop in values) {
		if(values[prop] !== 'undefined') {
			// assign to info object passed in on line 1
			values[prop] = info[prop]; 
		}
	}

	// 
	var functions = {
		triggerStart: function () {
			values.actualStart = Date.now();
		},
		triggerFinish: function () {
			values.actualFinish = Date.now();
		},
		// return values set for 'values' variable 
		getInformation: function () {
			return values;
		}
	};

	return functions;

};