var express = require('express');
var router = express.Router();

router.get('/new', function (req, res, next) {
  res.render('user/new');
});

router.post('/', function (req, res, next) {
  var user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email
  });

  user.save(function (err, user) {
    if(err) {
      res.render('user/new', { errors: err})
    } else {
      res.end('User Created');
    }
  });
});

module.exports = router;
