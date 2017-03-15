import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Input from './input';
import '../../css/signup.css';

export default class New extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.postData = this.postData.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  postData(e) {
    e.preventDefault();
    const {name, lastName, email, password} = this.state;
    axios.post(`http://localhost:8080/user/`, {name, lastName, email, password})
      .then(response => {
        localStorage.setItem('token', response.data)
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
      <div className='signup-layout'>
        <div className='signup-content'>
          <h3>Sign Up for your free FXCore account</h3>
          <h5>Use FXCore and all its features for free, forever!</h5>
          <div className='signup-animation'>
            <h1 className='animation-feature'>Sign up to get</h1>
            <h1 className='animation-feature'>the latest features</h1>
          </div>
            <div className='form-wrapper'>
              <form onSubmit={this.postData}>
                <Input
                  formType={'text'}
                  name={'name'}
                  placeholder={'First Name'}
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <Input
                  formType={'text'}
                  name={'lastName'}
                  placeholder={'Last Name'}
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
                <Input
                  formType={'text'}
                  name={'email'}
                  placeholder={'Enter Email'}
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <Input
                  formType={'password'}
                  name={'password'}
                  placeholder={'Enter Password'}
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <input type='submit' value='Join'></input>
              </form>
            </div>
        </div>
      </div>
    )
  }
}
