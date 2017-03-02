import React from 'react';
import NewsItems from './newsitems';
import NewsAPI from '../../utils/news_api'

const newsAPI = new NewsAPI()

export default class News extends React.Component {
  render () {
    return (
      <div className='header'>
        <h2>Recent Financial News</h2>
        <NewsItems newsAPI={newsAPI} />
      </div>
    )
  }
}
