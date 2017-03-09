  var Currency = require('../models/currency');
  var mongoose = require('mongoose');
  var axios    = require('axios');
  var later    = require('later');

  mongoose.connect("mongodb://localhost/fxcore_db", function(err,res){
    if(err) throw err;
    console.log("Connected to mongodb");
  });

  function makeRequest() {
    currencyArr = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD",
                    "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK",
                    "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"
                  ];
    var apiURL   = `http://apilayer.net/api/historical?access_key=ac3735d61ff5eadd7a4906e63cb9437f&`

    function individualRequests() {
      currentDate = new Date();
      currencyArr.map((item) => {
        var newURL = `${apiURL}` + `source=${item}&date=${currentDate}`;
        axios.get(`${newURL}`)
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
              currency.save(function (err,currency) {
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
      });
    }
  }

  function later() {
    var time     = later.parse.text('at 05:00 am');
    var schedule = later.schedule(time);
    later.setInterval(makeRequest, schedule);
  }

module.exports = {makeRequest, later}
