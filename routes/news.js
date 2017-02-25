var express = require('express');
var router = express.Router();
var axios = require('axios');
var api = require('../config/api');


var financialTimesUrl = 'https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=' + api.api;

var bloomBergUrl = 'https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=' + api.api;

// console.log(bloomBergUrl);
let news = [];

function firstAjax(){
  axios.get(`${financialTimesUrl}`)
  .then(response => {
    response.data.articles.forEach( article =>
      news.push(article));
    })
    .catch(function(err) {
      return err;
    });
}

function secondAjax(){
  axios.get(`${bloomBergUrl}`)
  .then(response => {
    response.data.articles.forEach( article =>
      news.push(article));
    })
    .catch(function(err) {
      return err;
    });
}

router.get('/', function(req, res, next) {
  axios.all([firstAjax(), secondAjax()])
  .then(response => {
    // Both requests are now complete
    res.render('news/index', {news: news})
  });
});


module.exports = router;
