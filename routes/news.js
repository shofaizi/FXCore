var express = require('express');
var router = express.Router();
var axios = require('axios');

var newsUrl = 'https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=';

router.get('/', function(req, res, next) {
  axios.get(`${newsUrl}`)
    .then(response => {
      var news = response.data.articles;
      console.log(news);
      res.render('news/index', {news: news});
    })
    .catch(function(err) {
      return err;
    });
});

module.exports = router;
