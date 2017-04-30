import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contact-container'>
        <h3 className='title' id='projects-title'>GET IN TOUCH</h3>

        <div className='contact-text'>
          <p>I'm looking for new opportunities and would love to chat.</p>
          <p>If you're interested in working together, please reach out!</p>
        </div>

        <div className='contact-icons'>
          <div>
            <img className='contact-icon'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493489180/Screen_Shot_2017-04-29_at_10.53.53_AM_zetwdp.png' />
            <span className='contact-icon-text'>jayhwang0121@gmail.com</span>
          </div>

          <div>
            <img className='contact-icon'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493489180/Screen_Shot_2017-04-29_at_10.53.51_AM_arb6jt.png' />
            <span className='contact-icon-text'>San Francisco, US</span>
          </div>

          <div>
            <img className='contact-icon'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493489180/Screen_Shot_2017-04-29_at_10.53.43_AM_dmscre.png' />
            <span className='contact-icon-text'>818 456 7671</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
