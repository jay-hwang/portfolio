import React from 'react';

const Connect = () => {
  return (
    <div className='social-links'>
      <a className='social-link' href='/resume.pdf' target='_blank'>
        <img alt='Resume'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493490453/resume_pj3tvj.png'
          className='social-link-img' />
      </a>

      <a className='social-link' href='https://github.com/jay-hwang' target='_blank'>
        <img alt='GitHub'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493490453/github_tbxn4c.png'
          className='social-link-img' />
      </a>

      <a className='social-link' href='https://angel.co/jay-hwang' target='_blank'>
        <img alt=''
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493490453/angel_mlmk9k.png'
          className='social-link-img' />
      </a>

      <a className='social-link' href='https://www.linkedin.com/in/jay-hwang' target='_blank'>
        <img alt=''
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493490453/linkedin_os9bmt.png'
          className='social-link-img' />
      </a>

      <a className='social-link' href='mailto:jayhwang0121@gmail.com' target='_blank'>
        <img alt=''
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493490453/email_m6lwro.png'
          className='social-link-img' />
      </a>
    </div>
  );
};

export default Connect;
