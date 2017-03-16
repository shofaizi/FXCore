import {basil} from './persistence'
import R from 'ramda'

class Auth {
  // static authenticateUser(token) {
  //   localStorage.setItem('token', token);
  // }

  static isUserAuthenticated() {
    return !R.isNil(basil.get('token'))
  }

  static deauthenticateUser() {
    basil.set('token', null)
  }

  static getToken() {
    return basil.get('token')
  }
}

export default Auth;
