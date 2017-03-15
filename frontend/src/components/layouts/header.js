import React from 'react';
import {Link} from 'react-router';
import '../../css/header.css';
import Auth from '../../utils/auth';
import fxcore from '../../images/fxcore.png'

export default class Header extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <div className='navbar-logo'>
          <img src={fxcore} alt="#"/>
        </div>
          <ul className='navbar-items'>
            <li>
              <Link to='/fx'>FXCore</Link>
            </li>
            <li>
              <Link to='/news'>FXNews</Link>
            </li>
            {Auth.isUserAuthenticated() ? (
              <li onClick={Auth.deauthenticateUser()}>
                <Link to="/">Log out</Link>
              </li>
            ) : (
              <div className='user-loggin'>
                <li>
                  <Link to='/user/signin' className='signin'>Sign In</Link>
                </li>
                <li>
                  <Link to='/user/new' className='gettingStarted'>Get Started</Link>
                </li>
              </div>
              )
            }
          </ul>
      </div>
    )
  }
}
