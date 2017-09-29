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
          I've had the honor of working on impactful, innovative projects, ranging from a blog dedicated to fighting human trafficking, to launching some of the first server-less, decentralized applications utilizing Blockchains & <a href="https://www.blockstack.org" target="_blank">Blockstack</a>.
        </p>

        <p>
          When I'm not busy telling computers what to do, you can find me writing/playing music with friends, carving mountain roads on a motorcycle or taking apart machines to see how they work
        </p>

        <p>
          Lately, I've found myself being drawn into the world of Blockchains & Cryptocurrencies.
        </p>

        <button className='see-skills' onClick={ skillsClick }>
          View My Tech Stack
        </button>
      </div>

    </section>
  );
};

export default About;
