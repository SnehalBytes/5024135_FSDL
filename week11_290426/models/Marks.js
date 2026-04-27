const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  studentId: String,
  subject: String,
  marks: Number
});

module.exports = mongoose.model("Marks", marksSchema);