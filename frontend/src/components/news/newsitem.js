import React from 'react';

export default class NewsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      bookmarked: false
    }
    this.onLikeChange = this.onLikeChange.bind(this)
    this.onBookMarkChange = this.onBookMarkChange.bind(this)
  }

  onLikeChange() {
    this.setState({liked: !this.state.liked});
  }

  onBookMarkChange() {
    this.setState({bookmarked: !this.state.bookmarked});
  }

  formatDate(date) {
    date.toLocaleString('en-US');
  }


  render () {
    return (
      <li key={`article-${this.index}`} className='list'>
        <div className='article-container'>
          <div className='image-container'>
            <img src={this.props.article.urlToImage} alt=""/>
          </div>
          <div className='article-info'>
            <div className='article-title'>
              <h4>{this.props.article.title}</h4>
            </div>
            <div className='article-author'>
              By:  {this.props.authorExist(this.props.article.author)}
            </div>
            <div className='read-more'>
              <a href={this.props.article.url}>Read more..</a>
            </div>
            <div className='publishedAt'>
              Published: {this.props.article.publishedAt}
            </div>
            <div className='icons'>
              <span onClick={this.onLikeChange}>
                <i id='heart' className="fa fa-heart-o fa-2x" aria-hidden="true" style={{color: this.state.liked ? 'red' : ''}}></i>
              </span>
              <span onClick={this.onBookMarkChange}>
                <i className="fa fa-bookmark-o fa-2x" aria-hidden="true" style={{color: this.state.bookmarked ? 'blue' : ''}}></i>
              </span>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
