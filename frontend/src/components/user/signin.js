import React from 'react';
import '../../css/signin.css';
import axios from 'axios';

export default class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
    this.postData = this.postData.bind(this);
  }

  postData(data) {
    axios.post(`http://localhost:8080/user/login`, data)
      .then(response => {
        this.setState({ data: response })
      })
      .catch(err => {
        console.error(err);
        // debugger
      });
  }

  render() {
    return (
      <div className='signin-layout'>
        <div className='logo-display'>
          <img src='fxcore.png' alt="#"/>
        </div>

        <div className='signin-wrapper'>
          <form onSubmit={this.postData}  className='signin-form'>
            <input type='text' id='email' name='email' placeholder='Email Address'></input>
            <input type='password' id='password' name='password' placeholder='Enter Password'></input>
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
