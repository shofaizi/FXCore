var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bodyParser = require("body-parser");

router.get('/new', function (req, res, next) {
  res.render('user/new');
});

router.post('/', function (req, res, next) {
  var user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email
  });
  console.log(req.body.name);
  user.save(function (err, user) {
    if(err) {
      res.render('user/new', {errors: err.errors})
    } else {
      res.render('user/success-signup', {user});
    }
  });
});

module.exports = router;
