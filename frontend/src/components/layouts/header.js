import React from 'react';
import {Link} from 'react-router';
import '../../css/header.css';

export default class Header extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <div className='navbar-logo'>LOGO</div>
          <ul className='navbar-items'>
            <li>
              <Link to='/fx'>FXCore</Link>
            </li>
            <li>
              <Link to='/news'>FXNews</Link>
            </li>
            <li>
              <Link to='/user/signin' className='signin'>Sign In</Link>
            </li>
            <li>
              <Link to='/user/new' className='gettingStarted'>Get Started</Link>
            </li>
          </ul>
      </div>
    )
  }
}
