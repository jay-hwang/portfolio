import React from 'react';

const ProjectsScroll = ({ projectLis, scrollLeft, scrollRight }) => (
  <div className='projects-scroll'>
    <div className='left-arrow-box arrow-box display-none'>
      <div className='left-circle arrow-circle'
        onClick={ scrollLeft }>
        <img className='arrow-img'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493512202/left-arrow_sbunnt.png' />
      </div>
    </div>

    <div className='projects-window'>
      <ul className='projects-ul'>
        { projectLis }
      </ul>
    </div>

    <div className='right-arrow-box arrow-box'>
      <div className='right-circle arrow-circle'
        onClick={ scrollRight }>
        <img className='arrow-img'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493511005/arrow_r5mjhk.png' />
      </div>
    </div>
  </div>
);

export default ProjectsScroll;
