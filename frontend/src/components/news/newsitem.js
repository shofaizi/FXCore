import React from 'react';

export default class NewsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
    }
    this.onLikeChange = this.onLikeChange.bind(this)
  }

  onLikeChange() {
    this.setState({liked: !this.state.liked});
  }

  render () {
    return (
      <li key={`article-${this.index}`} className='list'>
        <div className='article-container'>
          <div className='image-container'>
            <img src={this.props.article.urlToImage} alt=""/>
          </div>
          <div className='article-title'>
            <h4>{this.props.article.title}</h4>
          </div>
          <div className='article-author'>
            {this.props.authorExist(this.props.article.author)}
          </div>
          <div className='read-more'>
            <a href={this.props.article.url}>Read more..</a>
          </div>
          <div className='icons'>
            <span onClick={this.onLikeChange}>
              <i id='heart' className="fa fa-heart-o fa-2x" aria-hidden="true" style={{color: this.state.liked ? 'red' : 'white'}}></i>
            </span>
            <span>
              <i className="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </li>
    )
  }
}
