var express = require('express');
var router = express.Router();
var axios = require('axios');

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

module.exports = router;
