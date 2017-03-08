import React from 'react';
import '../../css/info.css';

export default class Info extends React.Component {
  render() {
    return (
      <div>
        <div className='section-container'>
          <div className='info-container'>
            <div className='info-image'>
              <img src='circleArrow.png' alt='#' className='info-image' />
            </div>
            <div className='info-text'>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </div>
          </div>

          <div className='info-container'>
            <div className='info-image'>
              <img src='graph.png' alt='#' className='info-image' />
            </div>
            <div className='info-text'>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </div>
          </div>

          <div className='info-container'>
            <div className='info-image'>
              <img src='newspaper.png' alt='#' className='info-image' />
            </div>
            <div className='info-text'>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
