import React from 'react';
import '../../css/signin.css';

export default class SignIn extends React.Component {
  render() {
    return (
      <div className='signin-layout'>
        <div className='logo-display'>
          <img src='fxcore.png' alt="#"/>
        </div>

        <div className='signin-wrapper'>
          <form method="POST" action='/user/signin' className='signin-form'>
            <input type='text' id='email' name='email' placeholder='Email Address'></input>
            <input type='text' id='password' name='password' placeholder='Enter Password'></input>
            <div className='submit-section'>
              <input type='checkbox'></input>
              <label>Remember Me</label>
              <input type='submit' value='Join' className='join'></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
