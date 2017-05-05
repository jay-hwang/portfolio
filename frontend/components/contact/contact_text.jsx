import React from 'react';

const ContactText = ({ screenClass }) => {
  let klass = `contact-text contact-text-${screenClass}`;
  return (
    <div className={ klass }>
      <p>I'm looking for new opportunities and would love to chat.</p>
      <p>If you're interested in working together, please reach out!</p>
    </div>
  );
};

export default ContactText;
