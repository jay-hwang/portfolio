import React from 'react';
import ProjectMobile from './mobile/project_mobile';
import ProjectLinks from './project_links';


const Project = ({ project }) => {
  const projectStack = project.stack.split(',').map((tech, i) => (
    <li key={i}>
      <div className='project-stack'>{tech}</div>
    </li>
  ));

  const projectDesc = project.description.split('<br/>').map((desc, i) => (
    <p className='project-desc' key={i} >- { desc }</p>
  ));

  return (
    <div className='project' id='project-mobile'>
      <div className='project-img'
        style={{ backgroundImage: `url(${project.image_url})` }}>
      </div>

      <div className='project-info'>
        <h3 className='project-name'>{ project.title }</h3>
        <div className='project-desc-box'>{ projectDesc }</div>
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
