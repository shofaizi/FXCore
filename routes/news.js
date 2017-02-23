var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/news', function(req, res, next) {
  axios.get(`${newsUrl}`)
    .then(response => {
      var news = response.articles;
      console.log(news);
      res.render('fx/news'), {data: news};
    })
    .catch(function(err) {
      return err;
    });
});

module.exports = router;
