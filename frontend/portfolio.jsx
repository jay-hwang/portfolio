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
  $(window).scroll(function() {
    let y = $(this).scrollTop();
    if (y > 600) {
      $('.navbar').slideDown();
    }
    else {
      $('.navbar').slideUp();
    }
  });

  // Changes Home Component background img
  // const bgImgs = [
  //   'https://res.cloudinary.com/ddgtwtbre/image/upload/a_90/v1493442364/IMG_6249_jae9is.jpg',
  //   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1481423849/portfolio_background2_i4tzx5.jpg',
  //   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1493442365/Screen_Shot_2017-04-27_at_6.21.58_PM_o48mti.png'
  // ];
  // let i = 0;
  // setInterval(() => {
  //   if (i >= bgImgs.length) { i = 0; }
  //   $('.bg').css('background-image', `url(${bgImgs[i]})`);
  //   i++;
  // }, 2000);



  ReactDOM.render(<Root store={store} />, main);
});
