import {basil} from './persistence'
import R from 'ramda'

const Auth = {
  // static authenticateUser(token) {
  //   localStorage.setItem('token', token);
  // }

  verifyAuthenticated: (nextState, replace) => {
    if(replace && !Auth.isUserAuthenticated()) {
      replace('user/signin')
    }
  },

  isUserAuthenticated: () => {
    return !R.isNil(basil.get('token'))
  },

  deauthenticateUser: () => {
    basil.set('token', null)
  },

  getToken: () => {
    return basil.get('token')
  }
}

export default Auth;
