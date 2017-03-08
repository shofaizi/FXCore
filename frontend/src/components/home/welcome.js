import React from 'react';
import {Link} from 'react-router';
import '../../css/welcome.css';

export default class Welcome extends React.Component {
  render () {
    return (
      <div>
        <div className='cover-content'>
          <div className='welcome-animation'>
            <h1>Hi, we're FXCore</h1>
            <h4>Your friendly Financial Platform</h4>
            <div className='getStarted'>
              <Link to={'/user/new'} className='anchor'>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
