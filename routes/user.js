var express = require('express');
var router = express.Router();

router.get('/new', function (req, res, next) {
  res.render('user/new');
});

module.exports = router;
