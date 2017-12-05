import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


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

  // Repeats arrow bounce animation
  animateArrowBounce();
  setInterval(() => {
    animateArrowBounce();
  }, 3500);

  // Changes Home Component background img
    let homeImgUrls = [
      'https://res.cloudinary.com/ddgtwtbre/image/upload/v1494307445/engineer_wel7wz.png',
      'http://res.cloudinary.com/ddgtwtbre/image/upload/v1481423849/portfolio_background2_i4tzx5.jpg',
      'https://res.cloudinary.com/ddgtwtbre/image/upload/v1493491092/Screen_Shot_2017-04-27_at_6.21.58_PM_ngf33c.png',
      'https://res.cloudinary.com/ddgtwtbre/image/upload/v1493857064/grand-canyon_pmefu7.jpg',
      // 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1493503084/nodes-connection_ttqk0n.jpg',
    ];
    let i = 0;
    let len = homeImgUrls.length - 1;
    setInterval(() => {
        $('.home').css('background-image', `url('${homeImgUrls[i]}')`);
        i++;
        if (i > len) { i = 0; }
    }, 4000);
  //

  // Home Component typing animation
    $(".home-intro").typed({
      strings: [
        "Hi! I'm Jay",
        "Software Engineer and Music Producer",
      ],
      typeSpeed: 12,
      loop: true,
      backDelay: 2500
    });
    setInterval(() => {
      $('.typed-cursor').fadeOut(600);
      setTimeout(() => {
        $('.typed-cursor').fadeIn(600);
      }, 600);
    }, 1200);
  //

  $("#loadScreen").fadeOut()
});

///////////////////////////////////////////////////////////////////////////////

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
      const removeActive = () => $('.navbar-link').removeClass('active');

      // Without About Component
      if (y > (wh * 2)) {
        removeActive();
        $('#contact-nav').addClass('active');
      }
      else if (y > (wh * 2) - 300) {
        removeActive();
        $('#projects-nav').addClass('active');
      }
      else if (y >= wh - 71) {
        removeActive();
        $('#skills-nav').addClass('active');
        // $('#about-nav').addClass('active');
      }
      else {
        removeActive();
        $('#home-nav').addClass('active');
      }

      // With About Component
      // if (y > (wh * 3 + 200)) {
      //   removeActive();
      //   $('#contact-nav').addClass('active');
      // }
      // else if (y > (wh * 3) - 500) {
      //   removeActive();
      //   $('#projects-nav').addClass('active');
      // }
      // else if (y > (wh * 2) - 300) {
      //   removeActive();
      //   $('#skills-nav').addClass('active');
      // }
      // else if (y > wh - 70) {
      //   removeActive();
      //   $('#about-nav').addClass('active');
      // }
    //

    // Animate about components
      // if (y > wh / 2 - 200) {
      //   $('.about-img-scrollIn').removeClass('transparent');
      //   $('.about-img').animate({ top: -80, opacity: 1 }, 500);
      //   setTimeout(() => {
      //     $('.about-p').animate({ top: -80, opacity: 1 }, 500);
      //   }, 300);
      // }
    //


    // Animate contact icons
      let aboutHeight = $('.about').height();
      let skillsHeight = $('.skills').height();
      let projectsHeight = $('.projects').height();
      if (y > skillsHeight + projectsHeight + (wh / 2.5)) {
        $('#contact-icon3').animate({ top: -25, opacity: 1 }, 500);
        setTimeout(() => {
          $('#contact-icon').animate({ top: -25, opacity: 1 }, 500);
        }, 200);
        setTimeout(() => {
          $('#contact-icon2').animate({ top: -25, opacity: 1 }, 500);
        }, 400);
      }
    //
  });

  ReactDOM.render(<Root store={store} />, main);
});
