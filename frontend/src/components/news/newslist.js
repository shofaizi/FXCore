import React from 'react';
import NewsItem from './newsitem';
import R from 'ramda';
import '../../css/news.css';

export default class NewsItems extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      financialTimesArticles: [],
      bloombergArticles: []
    };
  }

  componentDidMount () {
    this.loadFinancialTimesArticles()
    this.loadBloomgbergArticles()
  }

  renderArticlesEmptyView(source) {
    return (
      <li>{`no articles for ${source}!`}</li>
    )
  }

  authorExist(author) {
    return author ? author : " Annoymous"
  }

  renderArticles(collection, source) {
    const articlesView = collection.map((article, index) => {
      return (
        <NewsItem
          index={index}
          authorExist={this.authorExist}
          article={article}
        />
      )
    })

    return (R.isEmpty(collection) ? this.renderArticlesEmptyView(source) : articlesView
  )}

  loadFinancialTimesArticles() {
    this.props.newsAPI.fetchFinancialTimesArticles().then(response => {
      this.setState({
        financialTimesArticles: response.data.articles
      })
    })
  }

  loadBloomgbergArticles() {
    this.props.newsAPI.fetchBloombergArticles().then(response => {
      this.setState({
        bloombergArticles: response.data.articles
      })
    })
  }

  renderArticleSection(articles, source) {
    return (
      <div className='article-layout'>
        <h2>{source}</h2>
        <ul>
          {this.renderArticles(articles, source)}
        </ul>
      </div>

    )
  }
  

  render() {
    const {financialTimesArticles, bloombergArticles} = this.state

    // const financialTimesArticles = this.state.financialTimesArticles
    // const bloombergArticles = this.state.bloombergArticles

    return (
      <div className='news-content'>
        <div className='news-items'>
          {this.renderArticleSection(financialTimesArticles, "Financial Times")}
          {this.renderArticleSection(bloombergArticles, "Bloomberg")}
        </div>
      </div>
    )
  }
}
