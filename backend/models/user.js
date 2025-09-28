const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength : 8,
    maxlength : 100
  }
});


const userDetails = mongoose.model("userDetails", userSchema)

module.exports = userDetails;