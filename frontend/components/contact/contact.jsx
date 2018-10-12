import React from 'react';

const Contact = () => (
  <div className='contact-container'>
    <h3 className='title' id='dark-title'>GET IN TOUCH</h3>

    <div className='contact-text'>
      <p>Fellow music nerd? Company recruiter? Just want to drop a line?</p>
      <p>Feel free to reach out!</p>
    </div>

    <div className='contact-icons'>
      <div id='contact-icon'  className='transparent'>
        <a className='contact-email-link' href='mailto:jay.ithiel@gmail.com' target='_blank'>
          <img
            className='contact-icon-image'
            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493489180/Screen_Shot_2017-04-29_at_10.53.53_AM_zetwdp.png'
          />
          <span className='contact-icon-text'>jay.ithiel@gmail.com</span>
        </a>
      </div>

      <div id='contact-icon2' className='transparent'>
        <img className='contact-icon-image'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493489180/Screen_Shot_2017-04-29_at_10.53.51_AM_arb6jt.png' />
        <span className='contact-icon-text'>San Francisco, US</span>
      </div>

      <div id='contact-icon3' className='transparent'>
        <img className='contact-icon-image'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493489180/Screen_Shot_2017-04-29_at_10.53.43_AM_dmscre.png' />
        <span className='contact-icon-text'>213 340 4295</span>
      </div>

    </div>
  </div>
);

export default Contact;
