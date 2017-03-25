  var Currency = require('../models/currency');
  var mongoose = require('mongoose');
  var axios    = require('axios');
  var later    = require('later');
  // var moment   = require('moment-timezone');

  var individualRequests = function() {
    currencyArr = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD",
                  "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK",
                  "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"
                ];
    var apiURL   = `http://api.fixer.io/`;

    var date = new Date();
    var currentDate = date.toISOString().slice(0,10);
    console.log(currentDate);

    // var yesterday = date.getDate()-0;
    // var month = date.getMonth()+1;
    // console.log(month);
    // var convertMonth = function() {
    //   if(month < 10) {
    //     month = '0' + month;
    //     console.log(month)
    //   }
    //   if(yesterday < 10) {
    //     yesterday = '0' + yesterday;
    //     console.log(yesterday)
    //   }
    // }();
    // var year = date.getFullYear();
    //
    // var complete = year + '-' + month + '-' + yesterday;
    // console.log(complete)

    currencyArr.map((item) => {
      var newURL = `${apiURL}${currentDate}?base=${item}`;
      // var newURL = `${apiURL}${complete}?base=${item}`;
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
                console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
                // moment(currency.createdAt).zone('-07:00').format();
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
    // var time = later.parse.text('every 20 sec');
    var time = later.parse.text('at 4:00 pm');
    var schedule = later.schedule(time);
    later.setInterval(individualRequests, time);
  }

module.exports = {laterFunction}
