  var Currency = require('../models/currency');
  var axios    = require('axios');
  var apiURL = 'http://apilayer.net/api/historical?access_key=8321275ba97c3742b8d48a772540a2e4&date=2017-02-20'

var atry = function() {
  axios.get(`${apiURL}`)
  .then(res => {
    var quotes = res.data.quotes;
    for(var key in quotes) {
      if(quotes.hasOwnProperty(key)){
        var curr = new Currency({
          base: res.data.source,
          date: res.data.date,
          currency: key,
          value: quotes[key]
        })
        console.log(curr)
        curr.save(function (err, curr) {
          if(err) {
            return err;
          } else {
            return curr;
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
