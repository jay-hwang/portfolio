import React from 'react';
import Connect from '../connect/connect';

const Footer = () => {
  return (
    <footer className='footer'>
      <Connect />
      <h4 id='credit'>
        Designed & Developed by <a target="_blank" href='https://github.com/jay-ithiel/portfolio'>Jay Ithiel</a>
      </h4>
    </footer>
  );
};

export default Footer;
