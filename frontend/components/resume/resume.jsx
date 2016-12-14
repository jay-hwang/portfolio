import React from 'react';

const Resume = () => (
  <div className='resume display-none'>
    <div className='resume-button'>
      <div className='resume-button-icon'>
        <img
          className='view-resume'
          src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1481593091/view-file_muzk63.png"/>
      </div>
      <span className='resume-button-text'>
        VIEW
      </span>
    </div>

    <div className='resume-button'>
      <div className='resume-button-icon'>
        <img
          className='download-resume'
          src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1481592433/download_avxquf.png"/>
      </div>
      <span className='resume-button-text'>
        <a target="_blank" href="resume.pdf">DOWNLOAD</a>
      </span>
    </div>

  </div>
);

export default Resume;
