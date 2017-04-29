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
              src='' />
            <span className='contact-icon-text'>jayhwang0121@gmail.com</span>
          </div>

          <div>
            <img className='contact-icon'
              src='' />
            <span className='contact-icon-text'>San Francisco, US</span>
          </div>

          <div>
            <img className='contact-icon'
              src='' />
            <span className='contact-icon-text'>818 456 7671</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
