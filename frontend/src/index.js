import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import './css/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
  </Router>
  ), document.getElementById('root')
);
