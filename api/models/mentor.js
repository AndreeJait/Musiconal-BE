const mongoose = require("mongoose");
const mentorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  alamat: { type: String, required: true },
  education: { type: String, required: true },
});
module.exports = mongoose.model("mentor", mentorSchema);
