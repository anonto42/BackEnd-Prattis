const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongodb');

const userSchema = mongoose.Schema({
  name: String,
  age: Number
})

const User = mongoose.model("user", userSchema);

module.exports = User;