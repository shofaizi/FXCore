var express = require('express');
var router = express.Router();
var axios = require('axios');
var currency = require('../models/currency');
var moment = require('moment')

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
  currency.find({
    base: req.query.firstBase,
    currency: req.query.secondBase,
    // date: req.query.date,
    // createdAt: moment({'$gte': new Date('2/3/2017'), '$lt': new Date()}).utcOffset(0).format()
    createdAt: {'$gte': moment('2017-03-02').utcOffset(0).format()}
  },
    'value',
    function(err, data) {
      console.log({'$gte': moment('2017-03-02').utcOffset(0).format()})
      if(err) console.log(err);
      console.log(">>>>>>>>>>>>>>>>");
      console.log(data);
      console.log(">>>>>>>>>>>>>>>>");
      res.json(data);
  });
});

module.exports = router;
