import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import FxLayout from './components/fx/fxlayout';
import NewUser from './components/user/new';
import SignIn from './components/user/signin';
import News from './components/news/newslayout';
import Welcome from './components/home/welcome';
import './css/index.css';
import Auth from './utils/auth';



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome}/>
      <Route path='fx' component={FxLayout} onEnter={Auth.isUserAuthenticated()}></Route>
      <Route path='news' component={News} onEnter={Auth.isUserAuthenticated()}></Route>
      <Route path='user/new' component={NewUser}></Route>
      <Route path='user/signin' component={SignIn}></Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);
