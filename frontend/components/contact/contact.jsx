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
        <img 
          className='contact-icon-image'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493489180/Screen_Shot_2017-04-29_at_10.53.53_AM_zetwdp.png'
        />
        <span className='contact-icon-text'>jayhwang0121@gmail.com</span>
      </div>
    </div>
  </div>
);

export default Contact;
