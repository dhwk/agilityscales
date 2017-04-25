import React from 'react';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);
