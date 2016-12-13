import React from 'react';

const WorkItem = ({ project }) => (
  <li className='work-item'>
    <div className={project.title} id='work-item-image'>
      <div className='work-item-image-layer'></div>
    </div>
    <span className='project-title'>{project.title}</span>
  </li>
);

export default WorkItem;
