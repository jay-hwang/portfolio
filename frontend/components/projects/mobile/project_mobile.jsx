import React from 'react';
import ProjectLinks from '../project_links';

const ProjectMobile = ({ project, projectStack }) => {
  return (
    <div className='project mobile' id='project-mobile'>
      <img src={ project.image_url } className='project-img' />

      <div className='project-info'>
        <h3 className='project-name'>{ project.title }</h3>
        <p className='project-desc'>{ project.description }</p>
      </div>

      <h3 className='stack-title'>Stack</h3>
      <ul className='stack'>
        { projectStack }
      </ul>

      <ProjectLinks project={ project } />
    </div>
  );
};

export default ProjectMobile;
