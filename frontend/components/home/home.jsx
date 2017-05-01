import React from 'react';
import Connect from '../connect/connect';

const Home = () => {
  const arrowBounceClick = () => {
    $("body").animate({ scrollTop: $(window).height() - 70}, 700);
    // scrolls 100vh each click
    // $("body").animate({ scrollTop: window.pageYOffset + $(window).height() - 70}, 700);
  };

  return (
    <section className='home'>
      <div className='veil'></div>

      <div className='bg'>
        <img className='bg-img' id='img1'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1481423849/portfolio_background2_i4tzx5.jpg' />

        <img className='bg-img display-none' id='img2'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493620704/Engineering-backgrounds-23_jknlfg.jpg' />

        <img className='bg-img display-none' id='img3'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493588104/baker-beach-ggb_xf6kxv.jpg' />

        <img className='bg-img display-none' id='img4'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493491092/Screen_Shot_2017-04-27_at_6.21.58_PM_ngf33c.png' />

        <img className='bg-img display-none' id='img5'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493491092/IMG_6249_rvfpk3.jpg' />
      </div>

      <h1><span className='home-intro'></span></h1>

      <Connect />

      <div className='arrow-bounce-box' onClick={ arrowBounceClick }>
        <img className='arrow-bounce'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493657666/down-arrow_puf3kb.png' />
      </div>
    </section>
  );
};

export default Home;

// <img className='bg-img display-none' id='img5'
//   src='' />
//
// <img className='bg-img display-none' id='img6'
//   src='' />
