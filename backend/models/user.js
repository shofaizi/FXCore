var mongoose = require("mongoose"),
    Schema   = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new Schema({
  name: {type: String, trim: true, required:true},
  lastName: {type: String, trim: true, required:true},
  email: {type: String, trim:true, unique: true, lowercase: true, required:true},
  password: {type: String, required: true},
},{timestamps: true});

UserSchema.pre('save', function(next) {
  var user = this;
  this.hashPassword(user.password, function(err, hash) {
    if(err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

UserSchema.methods.hashPassword = function(password, cb){
  bcrypt.genSalt(10, function(err, salt) {
    if(err){
      return cb(err);
    }
    bcrypt.hash(password, salt, function(err, hash) {
      if(err){
        return cb(err);
      }
        return cb(null, hash);
    });
  });
};

UserSchema.methods.compare = function(password) {
  return bcrypt.compare(password, this.password, function(err, res) {
      return res;
  });
};


module.exports = mongoose.model("User", UserSchema);
