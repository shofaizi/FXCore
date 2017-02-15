var mongoose = require("mongoose"),
    Schema   = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String, trim: true, required: true},
  lastName: {type: String, trim: true, required: true},
  email: {type: String, trim:true, unique: true, lowercase: true, required: true},
  password: {type: String}
},{timestamp: true});

module.exports = mongoose.model("User", UserSchema);
