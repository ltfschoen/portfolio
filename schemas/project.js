// schema for 'project' data
// require mongoose. pull in mongoose directly 
// not pulling in a live db connection
// only using model method of mongoose module
var mongoose = require('mongoose');

// export mongoose model from this file
// 'model' arguments: 
//   - name of collection to use
//   - object to define schema (all docs want in 'project' collection
// define the schema. object property names match field names. 
// values determine field types
module.exports = mongoose.model('Project', {
	number: Number,
	name: String,
	description: String,
	stacks: String,
	actualStart: String,
	actualFinish: String
});
