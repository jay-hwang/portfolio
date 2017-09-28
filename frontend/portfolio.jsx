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

  let y, top;
  $(window).scroll(function() {
    const wh = $(window).height();

    // Toggles hidden nav
      y = $(this).scrollTop();
      if (y > wh - 71) {
        $('.navbar').slideDown();
        // Animates skills background-image
          top = (600 - y) / 3;
          $('.skills-bg').css('top', top);
      }
      else {
        $('.navbar').slideUp();
      }
    //

    // Toggles Active Navbar link
      const clearActive = () => $('.navbar-link').removeClass('active');
      if (y > wh + 1600) {
        clearActive();
        $('#contact-nav').addClass('active');
      }
      else if (y > wh + 900) {
        clearActive();
        $('#projects-nav').addClass('active');
      }
      else if (y > wh + 400) {
        clearActive();
        $('#skills-nav').addClass('active');
      }
      else if (y > wh - 70) {
        clearActive();
        $('#about-nav').addClass('active');
      }
    //

    // Animate about components
      if (y > wh / 2 - 200) {
        $('.about-img-scrollIn').removeClass('transparent');
        $('.about-img').animate({ top: -80, opacity: 1 }, 500);
        setTimeout(() => {
          $('.about-p').animate({ top: -80, opacity: 1 }, 500);
        }, 300);
      }
    //

    // Animate project lis
      let aboutHeight = $('.about').height(),
          skillsHeight = $('.skills').height();
      if (y > wh + aboutHeight + (skillsHeight / 3)) {
        $('.project-li').animate({ marginLeft: 0, opacity: 1 }, 500);
      }
    //
  });

  ReactDOM.render(<Root store={store} />, main);
});

$(window).load(() => {
  // Animates Home Component arrow bounce
    const animateArrowBounce = () => {
      $('.arrow-bounce').animate({ bottom: 0 }, 400)
                        .animate({ bottom: 45 }, 400)
                        .animate({ bottom: 0 }, 400)
                        .animate({ bottom: 20 }, 400)
                        .animate({ bottom: 10 }, 400);
    };
  //

  // Animates Projects Scroll Arrow Image
    const getArrow = () => $('.arrow-img');
    const animateArrowGrowth = () => {
      let $arrowImg = getArrow();
      const h = $arrowImg.height();
      const w = $arrowImg.width();
      const h10 = h * .2;
      const w10 = w * .2;
      $arrowImg.animate({ height: h - h10, width: w - w10 }, 300)
               .animate({ height: h + h10, width: w + w10 }, 300)
               .animate({ height: h - h10, width: w - w10 }, 300)
               .animate({ height: h      , width: w       }, 300);
    };
    setInterval(() => {
    }, 2500);
  //

  // Repeats arrow animation
  animateArrowBounce();
  // animateArrowGrowth();
  setInterval(() => {
    animateArrowBounce();
    // animateArrowGrowth();
  }, 3500);

  // Changes Home Component background img
    let homeImgUrls = [
      'https://res.cloudinary.com/ddgtwtbre/image/upload/v1494307445/engineer_wel7wz.png',
      'https://res.cloudinary.com/ddgtwtbre/image/upload/v1493588104/baker-beach-ggb_xf6kxv.jpg',
      'https://res.cloudinary.com/ddgtwtbre/image/upload/v1493491092/Screen_Shot_2017-04-27_at_6.21.58_PM_ngf33c.png',
      'https://res.cloudinary.com/ddgtwtbre/image/upload/v1493857064/grand-canyon_pmefu7.jpg'
    ];
    let i = 0;
    setInterval(() => {
        $('.home').css('background-image', `url('${homeImgUrls[i]}')`);
        i++;
        if (i > 3) { i = 0; }
    // }, 3881.5 );
    // }, 3940);
    }, 4000);
  //

  // Home Component typing animation
    $(".home-intro").typed({
      strings: [
          "Hello! I'm Jay",
          "I'm a software engineer",
          "I live in San Francisco",
          "And love to write music"
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
  //
});
