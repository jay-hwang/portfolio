import React from 'react';
import MessageFormContainer from '../messages/message_form_container';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    $(".app-container").removeClass("blur");
    $(".app-content").removeClass("hide");
    $(".contact-container").addClass("hide");
  }

  render() {
    return (
      <div className='contact-container modal hide'>
        <div
          className="close"
          onClick={this.handleClose}>
          x
        </div>

        <h3 className='modal-header'>MESSAGE</h3>

        <MessageFormContainer />
      </div>
    );
  }
}

export default Contact;
