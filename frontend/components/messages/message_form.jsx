import React from 'react';
import { withRouter } from 'react-router';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: 1,
      author_name: "",
      subject: "",
      body: "",
      reference: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(field) {
    return (e) => {
      this.setstate({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.state;
    alert('you submitted a mesage!');
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.author_name}
          onChange={this.handleInputChange('author_name')}
          className="author-name form-item"
          placeholder="Name" />

        <input
          type="text"
          value={this.state.subject}
          onChange={this.handleInputChange('subject')}
          className='message-subject form-item'
          placeholder="Subject/Title" />

        <textarea
          value={this.state.body}
          onChange={this.handleInputChange('body')}
          className='message-body form-item'
          placeholder="Body">
        </textarea>

        <input
          type="text"
          value={this.state.reference}
          onChange={this.handleInputChange('reference')}
          className='reference form-item'
          placeholder="How did you hear about Jay?" />

        <button className="message-form-button">
          Send Message
        </button>

      </form>
    );
  }
}

export default MessageForm;
