import React from 'react';
import R from 'ramda';

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

  renderArticles(collection, source) {
    const articlesView = collection.map((article, index) => {
      return (
        <li key={`article-${index}`}>
          {article.title}
          {article.author}
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
