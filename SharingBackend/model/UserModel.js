const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/SharingMeme");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  photo: String,
});

module.exports = mongoose.model("user", userSchema);
