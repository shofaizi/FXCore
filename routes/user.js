var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/new', function (req, res, next) {
  res.render('user/new');
});

router.post('/user', function (req, res, next) {
  var user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email
  });
  user.save(function (err, user) {
    if(err) {
      res.render('user/new', { errors: err})
    } else {
      res.redirect('user/success-signup');
    }
  });
});

// router.get('/user/:id', function(req, res) {
//   res.send("You're logged in");
// });

module.exports = router;
