import React from 'react';
import NewsList from './newslist';
import NewsAPI from '../../utils/news_api'

const newsAPI = new NewsAPI()

export default class News extends React.Component {
  render () {
    return (
      <div className='header'>
        {/* <h2 id='recent-news'>Recent Financial News</h2> */}
        <NewsList newsAPI={newsAPI} />
      </div>
    )
  }
}
