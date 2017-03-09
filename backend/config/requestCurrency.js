  var Currency = require('../models/currency');
  var mongoose = require('mongoose');
  var axios    = require('axios');
  var apiURL = 'http://apilayer.net/api/historical?access_key=a0c2d7496af831a2b5ce32b081416a65&date=2017-02-20'

  mongoose.connect("mongodb://localhost/fxcore_db", function(err, res){
    if(err) throw err;
    console.log("Connected to mongodb");
  });

  var atry = function() {
    axios.get(`${apiURL}`)
    .then(res => {
      var quotes = res.data.quotes;
      for(var key in quotes) {
        if(quotes.hasOwnProperty(key)){
          var currency = new Currency({
            base: res.data.source,
            date: res.data.date,
            currency: key,
            value: quotes[key]
          })
          console.log(currency)
          currency.save(function (err, currency) {
            if(err) {
              return err;
            } else {
              return currency;
            }
          })
        }
      }
    })
    .catch(function(err) {
      return err;
    })
  }

  atry();
