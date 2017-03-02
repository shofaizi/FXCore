import React from 'react';
import R from 'ramda';
import '../../css/news.css';
import { Link } from 'react-router';

export default class NewsItems extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      saved: false,
      liked: false,
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
    return author ? author : "By Annoymous"
  }

  renderArticles(collection, source) {
    const articlesView = collection.map((article, index) => {
      return (
        <li key={`article-${index}`} className='list'>
          <div className='article-container'>
            <div className='image-container'>
              <img src={article.urlToImage} alt=""/>
            </div>
            <div className='article-title'>
              {article.title}
            </div>
            <div className='article-author'>
              {/* {this.authorExist(article.author).bind} */}
            </div>
            <div>
              <a href={article.url}>Read more..</a>
            </div>
            <div className='icons'>
              <span>
                <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
              </span>
              <span>
                <i className="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </li>
      )
    })

    return (R.isEmpty(collection) ? this.renderArticlesEmptyView(source) : articlesView)
  }

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
      <div>
        <h2>{source}</h2>
        <hr/>
        <ul>
          {this.renderArticles(articles, source)}
        </ul>
      </div>
    )
  }

  // handleTestButtonClick() {
  //   console.log("THIS", this)
  //   console.log("CLICKED", this.state.liked)
  // }

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
