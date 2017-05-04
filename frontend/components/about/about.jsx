import React from 'react';
import AboutMobile from './about_mobile';
import AboutTablet from './about_tablet';
import AboutDesktop from './about_desktop';

const About = () => {
  const wh = $(window).height();
  const skillsClick = () => {
    let aboutHeight = $('.about').height() + 10;
    $("body").animate({ scrollTop: wh + aboutHeight  }, 700);
  };

  return (
    <section className='about'>
      <AboutMobile  skillsClick={ skillsClick } />
      <AboutTablet  skillsClick={ skillsClick } />
      <AboutDesktop skillsClick={ skillsClick } />
    </section>
  );
};

export default About;


// <div className='mobile mobile-about-img-box'>
//   <img className='about-img transparent' id='about-img1'
//     src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493579446/IMG_6326_pjkyzo.jpg' />
//   <img className='about-img display-none' id='about-img2'
//     src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493579448/IMG_6523_kzkb9e.jpg' />
// </div>
//
// <div className='tablet tablet-about-img-box'>
//   <img className='about-img transparent' id='about-img1'
//     src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493579446/IMG_6326_pjkyzo.jpg' />
//   <img className='about-img display-none' id='about-img2'
//     src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493579448/IMG_6523_kzkb9e.jpg' />
// </div>
//
// <div className='desktop desktop-about-img-box'>
//   <img className='about-img transparent' id='about-img1'
//     src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493579446/IMG_6326_pjkyzo.jpg' />
//   <img className='about-img display-none' id='about-img2'
//     src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493579448/IMG_6523_kzkb9e.jpg' />
// </div>
//
// <div className='about-p transparent'>
//   <span className='about-title'>Music Composer turned Computer Programmer</span>
//
//   <p>
//     I chose to pursue programming because I want to apply my skills to contribute to solving humanitarian & social issues to move the world forward. Over the past 3 years, I've developed various projects in my leisure, ranging from a blog dedicated to fighting human trafficking to an automated job application script. I love to create and bring ideas to life.
//   </p>
//
//   <p>
//     When I'm not busy telling computers what to do, you can find me writing music or exploring the world on a motorcycle. I love traveling and learning about the various forms of arts different cultures cultivated over time - especially music.
//   </p>
//
//   <button className='see-skills' onClick={ skillsClick }>
//     View My Tech Stack
//   </button>
// </div>
