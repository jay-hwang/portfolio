import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contact-container'>
        <h3 className='title' id='projects-title'>GET IN TOUCH</h3>
        <p className='contact-text'>
          I'm looking for new opportunities and would love to chat.
          If you're interested in working together, please reach out!
        </p>

      </div>
    );
  }
}

export default Contact;
