var express = require('express');
var router = express.Router();
var user = require('../models/user');

// app.set('view engine', 'ejs');

router.get('/', function (req, res, next) {
  res.render('layout');
});

router.get('/new', function (req, res, next) {
  res.render('user/new.ejs');
});

module.exports = router;
