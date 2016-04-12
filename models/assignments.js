var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignSchema = new Schema ({
  assignmentNum: Number,
  studentName: {type: String, required: true},
  score: Number,
  dateComplete: {type: Date, required: false}
});

var Assignment = mongoose.model('Assignment', assignSchema);

module.exports = Assignment;
