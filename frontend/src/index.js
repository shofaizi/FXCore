import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import FxLayout from './components/fx/fxlayout';
import NewUser from './components/user/new';
import SignIn from './components/user/signin';
import News from './components/news/newslayout';
// import Welcome from './components/home/welcome';

import './css/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='fx' component={FxLayout}></Route>
      <Route path='news' component={News}></Route>
      <Route path='user/new' component={NewUser}></Route>
      <Route path='user/signin' component={SignIn}></Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);
