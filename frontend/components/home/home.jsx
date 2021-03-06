import React from 'react';
import Connect from '../connect/connect';

const Home = () => {
  const arrowBounceClick = () => {
    $("html, body").animate({ scrollTop: $(window).height() - 60}, 700);
  };

  return (
    <section className='home'>
      <div className='veil'></div>

      <div className='z1'>
        <h1 id='home-name'>JAY ITHIEL</h1>

        <h1 className='text-align--center'><span className='home-intro'></span></h1>
        <Connect />
        <div className='arrow-bounce-box' onClick={ arrowBounceClick }>
          <img className='arrow-bounce' src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493657666/down-arrow_puf3kb.png'/>
        </div>
      </div>
    </section>
  );
};

export default Home;
