var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	title: String,
	desc: String,
	startDate: { type: Date, default: Date.now },
	lastUpdateDate: { type: Date, default: Date.now },
	sharedKey: String,
	owner: String,
	devices:[{ deviceName: String }]
});

module.exports = mongoose.model('Project', ProjectSchema);