var mongoose = require("mongoose"),
    Schema   = mongoose.Schema;


var Currency = new Schema({
  base: {type: String, trim: true, required: true},
  date: {type: String, trim: true, required: true},
  currency: {type: String, trim: true, required: true},
  value: {type: Number, trim: true, required: true},
},{timestamps: true});


module.exports = mongoose.model("Currency", Currency)
