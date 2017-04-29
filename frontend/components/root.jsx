import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

import {
  requestProjects
} from '../actions/project_actions';

const Root = ({ store }) => {
  const _getProjects = () => {
    store.dispatch(requestProjects());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route
          path='/'
          onEnter={_getProjects}
          component={App}>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
