var mongoose = require("mongoose"),
    Schema   = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String, trim: true},
  lastName: {type: String, trim: true},
  email: {type: String, trim:true, unique: true, lowercase: true},
  password: {type: String}
},{timestamp: true});

module.exports = mongoose.model("User", UserSchema);
