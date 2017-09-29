import React from 'react';

const About = () => {
  const wh = $(window).height();
  const skillsClick = () => {
    let aboutHeight = $('.about').height() + 10;
    $("body").animate({ scrollTop: wh + aboutHeight  }, 700);
  };

  return (
    <section className='about'>
      <div className='about-img transparent' id='about-img'></div>

      <div className='about-p'>
        <span className='about-title'>Music Composer turned Software Engineer</span>

        <p>
          I chose to pursue programming because I wanted to tap into technology's potential to contribute to solving humanitarian & social issues.
        </p>

        <p>
          When I'm not busy telling computers what to do, you can find me playing music or carving mountains on a motorcycle. I also enjoy taking apart machines & electronics to see how they work.
        </p>

        <p>
          Lately, I've found myself being drawn into the world of Blockchains. I'm very excited about its upcoming advances!
        </p>

        <button className='see-skills' onClick={ skillsClick }>
          View My Tech Stack
        </button>
      </div>

    </section>
  );
};

export default About;
