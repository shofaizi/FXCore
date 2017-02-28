import React from 'react';
import '../css/header.css';

export default class Header extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <div className='navbar-logo'>LOGO</div>
          <ul className='navbar-items'>
            <li>
              <a>FXCore</a>
            </li>
            <li>
              <a>FXNews</a>
            </li>
            <li>
              <a className='signin'>Sign In</a>
            </li>
            <li>
              <a className='gettingStarted'>Get Started</a>
            </li>
          </ul>
      </div>
    )
  }
}
