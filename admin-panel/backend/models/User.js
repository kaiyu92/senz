var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	user: String,
	password: String,
	email: String,
	firstName: String,
	lastName: String,
	createdDate: { type: Date, default: Date.now },
	lastUpdateDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);