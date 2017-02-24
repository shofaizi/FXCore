var express = require('express');
var router = express.Router();
var axios = require('axios');

var financialTimesUrl = 'https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=';

var bloomBergUrl = 'https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=';

router.get('/', function(req, res, next) {
  let news = [];
  axios.get(`${financialTimesUrl}`)
    .then(response => {
      response.data.articles.forEach( article =>
      news.push(article))
    })
    .catch(function(err) {
      return err;
    });
  axios.get(`${bloomBergUrl}`)
    .then(response => {
      response.data.articles.forEach( article =>
      news.push(article))
      res.render('news/index', {news: news});
    })
    .catch(function(err) {
      return err;
    });
});

module.exports = router;
