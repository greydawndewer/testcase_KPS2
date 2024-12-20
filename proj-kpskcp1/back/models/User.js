const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  roll  : {
    type: Number,
    required: true,
    unique: true,
  },
  sec: {
    type: String,
    required: true,
  },
  std: {
    type: String,
    required: true,
  },
  pres: {
    type: String,
    required: true,
  },
  vpres: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", userSchema);
