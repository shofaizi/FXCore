import React from 'react';
import '../../css/footer.css';

export default class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <div className='left-column'>
          <div className='logo'></div>
            <p className='footer-paragraph'>
              FXCore is currently in BETA 1.0.
              Subscribe to our latest newsletter for updates and our weekly curated
              Sunday News Channel
            </p>
          <div>
            <input className='email' placeholder='Enter email'></input>
          </div>
        </div>
        <div className='center-column'>
          <h5>FXCore</h5>
          <a href='#'>Showcase FXCore</a>
          <a href='#'>Legal/Privacy</a>
          <a href='#'>FAQ</a>
          <p>© 2017 FXCore Inc All rights reserved</p>
        </div>
        <div className='right-column'>
          <h5>Follow Us</h5>
          <a href='#'>Twitter</a>
          <a href='#'>Facebook</a>
          <a href='#'>Github</a>
          <a href='#'>Contact Us</a>
        </div>
      </div>
    )
  }
}
