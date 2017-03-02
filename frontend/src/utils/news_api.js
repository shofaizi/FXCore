import api from '../../../backend/config/api';
import axios from 'axios';

class NewsAPI {

  constructor() {
    this.financialTimesURL = `https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=${api.api}`;

    this.bloomBergURL = `https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=${api.api}`;
  }

  fetchFinancialTimesArticles() {
    return axios.get(`${this.financialTimesURL}`)
  }

  fetchBloombergArticles() {
    return axios.get(`${this.bloomBergURL}`)
  }
}

export default NewsAPI
