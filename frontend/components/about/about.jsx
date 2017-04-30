import React from 'react';
import Resume from '../resume/resume';

const About = () => {
  return (
    <section className='about'>
      <img className='about-img'
        src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493491100/IMG_6326_elxzyi.jpg' />

      <div className='about-p'>
        <span className='about-title'>Music Producer turned Computer Programmer</span>

        <p>
          I chose to pursue programming because I want to apply my skills to contribute to solving humanitarian & social issues to move the world forward. Over the past 3 years, I've developed various projects in my leisure, ranging from a blog dedicated to fighting human trafficking to an automated job application script. I love to create and bring ideas to life.
        </p>

        <p>
          When I'm not busy telling computers what to do, you can find me writing music or exploring the world on a motorcycle. I love traveling and learning about the various forms of arts different cultures cultivated over time - especially music.
        </p>
      </div>
    </section>
  );
};

export default About;
