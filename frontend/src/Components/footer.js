import React from 'react';
import '../css/footer.css';

export default class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <div className='leftColumn'>
          <div className='logo'></div>
            <p className='footerParagraph'>
              FXCore is currently in BETA 2.0.
              Subscribe to our latest newsletter for updates and our weekly curated
              Sunday News Channel
            </p>
          <div>
            <input className='email' placeholder='Enter email'></input>
          </div>
        </div>
        <div className='centerColumn'>
          <h5>FXCore</h5>
          <a href='#'>Showcase FXCore</a>
          <a href='#'>Legal/Privacy</a>
          <a href='#'>FAQ</a>
          <p>© 2017 FXCore Inc all right reserved</p>
        </div>
        <div className='rightColumn'>
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
