import React from 'react';
import ProjectMobile from './mobile/project_mobile';
import ProjectLinks from './project_links';


const Project = ({ project }) => {
  const projectStack = project.stack.split(',').map((tech, i) => (
    <li key={i}>
      <div className='project-stack'>{tech}</div>
    </li>
  ));

  return (
    <div className='project' id='project-mobile'>
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
// <ProjectMobile project={ project } projectStack={ projectStack } />


export default Project;
