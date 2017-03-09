import React from 'react';
import '../../css/signup.css';

export default class New extends React.Component {
  render() {
    return (
      <div className='signup-layout'>
        <div className='signup-content'>
          <h3>Sign Up for your free FXCore account</h3>
          <h5>Use FXCore and all its features for free, forever!</h5>
          <div className='signup-animation'>
            <h1 className='animation-feature'>Sign up to get</h1>
            <h1 className='animation-feature'>the latest features</h1>
          </div>
            <div className='form-wrapper'>
              <form method="POST" action='/user'>
                <input type='text' id='name' name='firstName' placeholder='First Name'></input>
                <input type='text' id='lastName' name='lastName' placeholder='Last Name'></input>
                <input type='text' id='email' name='email' placeholder='Enter Email Address'></input>
                <input type='password' id='password' name='password' placeholder='Enter Password'></input>
                <input type='submit' value='Join'></input>
              </form>
            </div>
        </div>
      </div>
    )
  }
}
