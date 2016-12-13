import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {
  login,
  logout,
  signup
} from './actions/session_actions';

import {
  createMessage,
  deleteMessage
} from './actions/message_actions';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.createMessage = createMessage;
  window.deleteMessage = deleteMessage;

  ReactDOM.render(<Root store={store} />, main);
});
