var express = require('express');
var router = express.Router();
var axios = require('axios');

var latestUrl = 'http://api.fixer.io/latest';

router.get('/', function(req, res, next) {
  axios.get(`${latestUrl}`)
    .then(response => {
      var a = response.data.rates;
      console.log(a);
      res.render('fx/index', {data: a});
    })
    .catch(function(err) {
      return err;
    });
});

module.exports = router;
