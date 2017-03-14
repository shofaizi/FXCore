module.exports = function(token) {
  return function (nextState, replace) {
    if (!token) {
      replace({
        pathname: 'user/signin',
        state: { nextPathName: nextState.location.pathname}
      });
    }
  }
}
