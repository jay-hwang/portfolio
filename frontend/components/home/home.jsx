import React from 'react';
import Connect from '../connect/connect';

const Home = () => {
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

      <span className='home-intro'>
        Hello World!
      </span>

      <Connect />
    </section>
  );
};

export default Home;

// <img className='bg-img display-none' id='img5'
//   src='' />
//
// <img className='bg-img display-none' id='img6'
//   src='' />
