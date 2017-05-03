import React from 'react';

const AboutDesktop = ({ skillsClick }) => (
  <div className='desktop'>
    <div>
      <img className='about-img-desktop scrollIn transparent' id='about-img1'
        src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493579446/IMG_6326_pjkyzo.jpg' />
      <img className='about-img-desktop scrollIn display-none' id='about-img2'
        src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493579448/IMG_6523_kzkb9e.jpg' />
    </div>

    <div className='about-p-desktop transparent'>
      <span className='about-title'>Music Composer turned Computer Programmer</span>

      <p>
        I chose to pursue programming because I want to apply my skills to contribute to solving humanitarian & social issues to move the world forward. Over the past 3 years, I've developed various projects in my leisure, ranging from a blog dedicated to fighting human trafficking to an automated job application script. I love to create and bring ideas to life.
      </p>

      <p>
        When I'm not busy telling computers what to do, you can find me writing music or exploring the world on a motorcycle. I love traveling and learning about the various forms of arts different cultures cultivated over time - especially music.
      </p>

      <button className='see-skills' onClick={ skillsClick }>
        View My Tech Stack
      </button>
    </div>
  </div>
);

export default AboutDesktop;
