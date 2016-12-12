import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('root');

  const store = {};

  ReactDOM.render(<Root store={store} />, main);
});
