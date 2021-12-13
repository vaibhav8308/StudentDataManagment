const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
firstName: {
	type: String
},
lastName: {
	type: String
},
age: {
	type: Number
},
fieldOfStudy: {
	type: String
},
}, {
	collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)
