import React from 'react';
import '../../css/signin.css';

export default class SignIn extends React.Component {

  render() {
    return (
      <div className='signup-content'>
        <h3>Sign In</h3>
        <div className='form-wrapper'>
          <form method="POST" action='/user/signin'>
            <input type='text' id='email' name='email' placeholder='Enter Email Address'></input>
            <input type='text' id='password' name='password' placeholder='Enter Password'></input>
            <input type='submit' value='Join'></input>
          </form>
        </div>
      </div>
    )
  }
}
