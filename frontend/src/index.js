import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import './css/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='fx' component={FxLayout}></Route>
      <Route path='news' component={News}></Route>
      <Route path='user/new' component={}></Route>
      <Route path='user/signin' component={}</Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);
