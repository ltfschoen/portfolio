// track project objects created in this module
var count = 0;
// collect stack across of projects
var projectStacks = [];

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
// non-Factory design pattern (without module)
exports.create = function (info) {

	// set to new copy of project
	var instance = new Project();

	// fill new project object with info being passed in
	instance.fill(info);

	count++;
	// add stack of each project if the stack does 
	// not already exist in the array 'stacks'
	if (projectStacks.indexOf(info['stack']) < 0) {
		projectStacks.push(info['stack']);
	}

	return instance;

};

exports.getCount = function () {
	return count;
};

// return incompleted array
exports.getStack = function () {
	return projectStacks;
};

