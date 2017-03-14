  var Currency = require('../models/currency');
  var mongoose = require('mongoose');
  var axios    = require('axios');
  var later    = require('later');

  var individualRequests = function() {
    // console.log('>>>>>>>>>')
    // console.log('>>>>>>>>>')
    // console.log('background task fired')
    // console.log('>>>>>>>>>')
    // console.log('>>>>>>>>>')
    currencyArr = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD",
                  "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK",
                  "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"
                ];
    var apiURL   = `http://api.fixer.io/`;

    var date = new Date();
    var currentDate = date.toISOString().slice(0,10);

    currencyArr.map((item) => {
      var newURL = `${apiURL}${currentDate}?base=${item}`;
      axios.get(newURL)
      .then(res => {
        var rates = res.data.rates;
        for(var key in rates) {
          if(rates.hasOwnProperty(key)){
            var currency = new Currency({
              base: res.data.base,
              date: res.data.date,
              currency: key,
              value: rates[key]
            })
            currency.save(function (err,currency) {
              if(err) {
                console.error(err);
              } else {
                return currency;
              }
            })
          }
        }
      })
      .catch(function(err) {
        console.error(err);
      })
    });
  }

  var laterFunction = function() {
    // later.date.localTime()
    var time = later.parse.text('every 12 hrs');
    var schedule = later.schedule(time);
    later.setInterval(individualRequests, time);
  }

module.exports = {laterFunction}
