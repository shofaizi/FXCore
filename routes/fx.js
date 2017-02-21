var express = require('express');
var router = express.Router();
var axios = require('axios');

var latestUrl = 'http://api.fixer.io/latest';

router.get('/', function(req, res, next) {
  axios.get(`${latestUrl}`)
    .then(res => {
      var a = res.data.rates;
      console.log(a);
      res.render('fx/index', {data: a});
    })
});

module.exports = router;
