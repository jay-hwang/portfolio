import React from 'react';
import Connect from '../connect/connect';

const Home = () => {
  return (
    <section className='home'>
      <div className='bg'></div>
      <div className='veil'></div>
      <span className='home-intro'>
        Hello World!
      </span>

      <Connect />
    </section>
  );
};

export default Home;
