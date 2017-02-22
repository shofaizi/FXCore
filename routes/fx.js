var express = require('express');
var router = express.Router();
var axios = require('axios');

var latestUrl = 'http://api.fixer.io/latest';

router.get('/', function(req, res, next) {
  axios.get(`${latestUrl}`)
    .then(response => {
      // var arr = [];
      // var parsed = JSON.parse(response.data.rates);
      // for(var x in parsed){
      //   arr.push(parsed[x]);
      // }
      // console.log(arr);

      // var a = response.data.rates;
      var a = JSON.parse(response.data.rates);
      // var temp = [];
      // Object.keys(a).forEach(function(key){
      //   // console.log(key, a[key]);
      //   temp[key] = a[key];
      // });
      console.log(a);

      res.render('fx/index', {data: a});
    })
});

module.exports = router;
