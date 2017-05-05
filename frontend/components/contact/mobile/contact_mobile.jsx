import React from 'react';
import ContactTitle from '../contact_title';
import ContactText  from '../contact_text';
import ContactIcons from '../contact_icons';

const ContactMobile = () => (
  <div className='mobile'>
    <div className='contact-container'>
      <ContactTitle screenClass='mobile' />
      <ContactText  screenClass='mobile' />
      <ContactIcons screenClass='mobile' />
    </div>
  </div>
);

export default ContactMobile;
