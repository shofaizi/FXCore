var mongoose = require("mongoose"),
    Schema   = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var Currency = new Schema({
  base: {type: String, trim: true, required: true},
  date: {type: String, trim: true, required: true},
  currency: {type: String, trim: true, required: true},
  value: {type: Number, trim: true, required: true}
},{timestamp: true});
Currency.plugin(timestamps);

module.exports = mongoose.model("Currency", Currency)
