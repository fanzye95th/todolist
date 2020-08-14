import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from "./App/App";
import test from './containers/test.js'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/test" exact component={test} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
