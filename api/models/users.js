const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  profile: { type: String, default: "default.png" },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mentor",
    default: null,
  },
  isPenjual: { type: Boolean, default: false },
});
module.exports = mongoose.model("user", usersSchema);
