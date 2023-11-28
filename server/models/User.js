
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   UserName: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: false
  },
 
});



const User = mongoose.model("User", userSchema);

module.exports = User;