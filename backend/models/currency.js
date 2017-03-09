var mongoose = require("mongoose"),
    Schema   = mongoose.Schema;

var CurrencySchema = new Schema({
  base: {type: String, trim: true, required:true},
  date: {type: String, trim: true, required: true},
  currency: {type: String, trim: true, required: true},
  value: {type: Number, trim: true, required: true}
},{timestamp: true});


module.exports = mongoose.model("Currency", CurrencySchema)
