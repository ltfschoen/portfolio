// capital Projects (use as base for new project objects) 
var Project = function () {

	// define object values with placeholders
	this.data = {
		number: null,
		name: null,
		description: null,
		stack: null,
		actualStart: null,
		actualFinish: null
	};

	// setter loops over each property of var 'values' 
	// only want valid predefined object properties
	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				// assign to info object passed in on line 1
				this.data[prop] = info[prop]; 
			}
		}
	};

	this.triggerStart = function () {
		this.data.actualStart = Date.now();
	};

	this.triggerFinish = function () {
		this.data.actualFinish = Date.now();
	};

	// return values set for 'this.data' variable 
	this.getInformation = function () {
		return this.data;
	};

}; 

// create a new instance of the project object
// enforces consistent way to retrieve new objects
// by serving as a Factory design pattern
// for streamlined handling of creating object instances
module.exports = function (info) {

	// set to new copy of project
	var instance = new Project();

	// fill new project object with info being passed in
	instance.fill(info);

	return instance;

};