var express = require('express');
var router = express.Router();
var user = require('../models/user');
var auth = require('../config/index.js');
// var prompt = require('prompt');

router.get('/', function (req, res, next) {
  // prompt.start()
  // var passcode = prompt.get('passcode', function (err, result) {
  //     console.log('password: ' + result.passcode);
  // });
  // if(passcode === auth.passcode) {
    res.render('layout')
  // } else {
  //   next();
  // }
});

router.get('/new', function (req, res, next) {
  res.render('user/new');
});

module.exports = router;
