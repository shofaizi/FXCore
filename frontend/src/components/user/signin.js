import React from 'react';
import '../../css/signin.css';
import axios from 'axios';
import FormInput from './formInput';
import { Router, browserHistory }  from 'react-router';
import fxcore from '../../images/fxcore.png';

export default class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.postData = this.postData.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  postData(e) {
    e.preventDefault();
    const {email, password} = this.state;
    console.log(email, password);
    axios.post(`http://localhost:8080/user/login`, {email, password})
      .then(response => {
        console.log(response);
        localStorage.setItem('myToken', response.data);
        browserHistory.push('/')
      })
      .catch(err => {
        console.error(err);
      });
  }

  onChange(params) {
    this.setState(params)
  }


  render() {
    return (
      <div className='signin-layout'>
        <div className='logo-display'>
          <img src={fxcore} alt="#"/>
        </div>

        <div className='signin-wrapper'>
          <form onSubmit={this.postData} className='signin-form'>
            <FormInput
              formType={'text'}
              name={'email'}
              placeholder='Email Address'
              value={this.state.email}
              onChange={this.onChange}
            />
            <FormInput
              formType={'password'}
              name={'password'}
              placeholder={'Enter Password'}
              value={this.state.password}
              onChange={this.onChange}
            />
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
