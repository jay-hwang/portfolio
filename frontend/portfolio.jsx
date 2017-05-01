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

    // Toggles Active Navbar link
    const wh = $(window).height();
    const clearActive = () => $('.navbar-link').removeClass('active');
    if (y > wh + 1600) {
      clearActive();
      $('#contact-nav').addClass('active');
    }
    else if (y > wh + 900) {
      clearActive();
      $('#projects-nav').addClass('active');
    }
    else if (y > wh - 70) {
      clearActive();
      $('#about-nav').addClass('active');
    }
  });

  ReactDOM.render(<Root store={store} />, main);
});

$(window).load(() => {
  // Animates Home Component arrow bounce
  const animateArrowBounce = () => {
    $('.arrow-bounce').animate({ bottom: 0 }, 400);
    setTimeout(() => {
      $('.arrow-bounce').animate({ bottom: 45 }, 400);
    }, 400);
    setTimeout(() => {
      $('.arrow-bounce').animate({ bottom: 0 }, 400);
    }, 400);
    setTimeout(() => {
      $('.arrow-bounce').animate({ bottom: 20 }, 400);
    }, 400);
    setTimeout(() => {
      $('.arrow-bounce').animate({ bottom: 10 }, 400);
    }, 400);
  };
  animateArrowBounce();
  setInterval(() => {
    animateArrowBounce();
  }, 3500);

  // Changes Home Component background img
  let i = 1, j;
  setInterval(() => {
    j = i+1;
    if (j > 5) { j = 1; }
    $(`#img${j}`).fadeIn();
    $(`#img${i}`).fadeOut();
    i++;
    if (i > 5) { i = 1; }
  }, 3877);

  // Home Component typing animation
  $(".home-intro").typed({
    strings: [
        "Hello! I'm Jay",
        "I'm a software engineer",
        "I live in San Francisco",
        "I enjoy writing music",
        "And love to travel"//,
        // "            "
    ],
    typeSpeed: 11,
    loop: true,
    backDelay: 2000
  });

  setInterval(() => {
    $('.typed-cursor').fadeOut(350);
    setTimeout(() => {
      $('.typed-cursor').fadeIn(350);
    }, 350);
  }, 700);
});
