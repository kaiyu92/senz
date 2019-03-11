var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
	deviceName: String,
	owner: String,
	projects:[{ type: Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('Device', DeviceSchema);