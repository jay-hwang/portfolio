import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import Typewriter from './util/typewriter';
// import Util from './util/util';

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
  // let i = 1, j;
  // setInterval(() => {
  //   j = i+1;
  //   if (j > 4) { j = 1; }
  //   $(`#img${j}`).fadeIn();
  //   type('element', )
  //   $(`#img${i}`).fadeOut();
  //   i++;
  //   if (i > 5) { i = 1; }
  // }, 4000);

  // Home Component typing animation

  ReactDOM.render(<Root store={store} />, main);
});

$(window).load(() => {
  const clear = $element => {
    let text     = $element.html(),
        counterI = $element.html().length,
        interval = null;
        interval = setInterval(() => {
          text = text.substring(0, counterI - 1);
          // $element.html(text);
          $('.home-intro').html(text);
          counterI--;
          if (counterI <= 0) { clearInterval(interval); }
        }, 50);
  };

  const type = ($element, text, shouldClear = true) => {
    let typedText = '',
        counterI  = 0,
        interval  = null;
        interval  = setInterval(() => {
          typedText += text[counterI];
          // $element.hmtl(typedText);
          $('.home-intro').html(typedText);
          counterI++;
          if (counterI === text.length) {
            clearInterval(interval);
            if (shouldClear) {
              setTimeout(() => {
                clear($element);
              }, 1500);
            }
          }
        }, 60);
  };

  let intro = [
      "Hello World! I'm Jay",
      "I'm a software engineer",
      "I live in San Francisco",
      "I also write music",
      "And love to travel"
  ];

  type($('.home-intro'), intro[0]);
  let i = 1, j;
  setInterval(() => {
    j = i+1;
    if (j > 5) { j = 1; }
    $(`#img${j}`).fadeIn();
    console.log(i);
    if (i === 1) {
      type($('.home-intro'), intro[0]);
    }
    else {
      type($('.home-intro'), intro[i-1]);
    }
    $(`#img${i}`).fadeOut();
    i++;
    if (i > 5) { i = 1; }
  }, 3700);


  // $(".home-intro").typed({
    // strings: [
    //     "Hi! I'm Jay",
    //     "I'm a software engineer",
    //     "I live in San Francisco",
    //     "I write music",
    //     "And love to travel"
    // ],
  //   typeSpeed: 10,
  //   loop: true,
  //   backDelay: 2000
  // });
});
