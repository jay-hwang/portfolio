import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // Toggles hidden nav
  let y, top;
  $(window).scroll(function() {
    y = $(this).scrollTop();
    if (y > 600) {
      $('.navbar').slideDown();

      // Animates skills background-image
        top = (600 - y) / 3;
        $('.skills-bg').css('top', top);
      //

    }
    else {
      $('.navbar').slideUp();
    }
  });


  // Changes Home Component background img
  let i = 1, j;
  setInterval(() => {
    j = i+1;
    if (j > 4) { j = 1; }
    $(`#img${j}`).fadeIn();
    $(`#img${i}`).fadeOut();
    i++;
    if (i > 4) { i = 1; }
  }, 3000);



  ReactDOM.render(<Root store={store} />, main);
});
