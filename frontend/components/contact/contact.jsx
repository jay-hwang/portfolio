import React from 'react';
import MessageFormContainer from '../messages/message_form_container';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contact-container'>

        <h3 className='modal-header'>MESSAGE</h3>

        <MessageFormContainer />
      </div>
    );
  }
}

export default Contact;
