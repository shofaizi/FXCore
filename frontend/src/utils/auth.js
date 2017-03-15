class Auth {

  // module.exports = function(token) {
  //   let invalidateToken = (token) => {
  //     if(!token) {
  //       return true;
  //     }
  //   }
  //   return function (nextState, replace) {
  //     if (invalidateToken(token)) {
  //       replace({
  //         pathname: 'user/signin',
  //         state: { nextPathName: nextState.location.pathname}
  //       });
  //     }
  //   }
  // }

  // static authenticateUser(token) {
  //   localStorage.setItem('token', token);
  // }

  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}

export default Auth;
