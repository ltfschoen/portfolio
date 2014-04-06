// module project. capable of setting and getting data

// create variables within the scope of this module
// to store project information
var projectNum, projectName, projectDesc, projectStack;

// create setter functions for each variable
// we want to export the individual functions
// so other code may use it. it takes one argument
// using short variables to avoid conflicts

exports.setNumber = function (num) {
	projectNum = num;
};

exports.setName = function (name) {
	projectName = name;
};

exports.setDescription = function (desc) {
	projectDesc = desc;
};

exports.setStack = function (stack) {
	projectStack = stack;
};

// define a getter function to return object literal
// containing the values of this project module

exports.getInfo = function() {
	return {
		projectNum: projectNum,
		projectName: projectName,
		projectDesc: projectDesc,
		projectStack: projectStack
	};
};