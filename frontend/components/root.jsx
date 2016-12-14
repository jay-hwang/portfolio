import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Work from './work/work';
import Contact from './contact/contact';
import WorkItemDetail from './work/work_item_detail';

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
        <Route path='/' component={App}>

          <Route
            path='/work'
            onEnter={_getProjects}
            component={Work}>
          </Route>

          <Route
            path='/contact'
            component={Contact}>
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
