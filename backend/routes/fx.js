var express = require('express');
var router = express.Router();
var axios = require('axios');
var currency = require('../models/currency');

var latestUrl = 'http://api.fixer.io/latest';

function loggedIn(req, res, next) {
  if(req.user){
    next();
  } else {
    res.redirect('/user/login')
  }
}

router.get('/', loggedIn, function(req, res, next) {
  axios.get(`${latestUrl}`)
    .then(response => {
      var a = response.data.rates;
      res.render('fx/index', {data: a});
    })
    .catch(function(err) {
      return err;
    });
});

router.get('/graph', function(req, res, next) {
  // console.log(req.query);
  currency.findOne({
    base: req.query.firstBase,
    currency: req.query.secondBase,
    date: req.query.date
  },
    'value',
    function(err, data) {
      if(err) console.log(err);
      res.json({value:data.value})
  });
});

module.exports = router;
