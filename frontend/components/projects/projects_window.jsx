import React from 'react';

const ProjectsWindow = ({ projectLis }) => (
  <div className='projects-window'>
    <ul className='projects-ul'>
      { projectLis }
    </ul>
  </div>
);

export default ProjectsWindow;
