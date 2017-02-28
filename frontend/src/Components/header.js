import React from 'react';
import '../header.css';

export default class Header extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>
              <img alt=""/>
            </a>
            <ul className='navbar-items'>
              <li>
                <a>FXCore</a>
              </li>
              <li>
                <a>FXNews</a>
              </li>
              <li>
                <a>Sign In</a>
              </li>
              <li>
                <a>Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
