import React from 'react';

const ProjectLinks = ({ project }) => {
  if (project.live_url) {
    return (
      <div className='project-links'>
        <a href={ project.github_url } className='project-link'>GitHub</a>
        <a href={ project.live_url } className='project-link'>Live</a>
      </div>
    );
  }

  else {
    return (
      <div className='project-links'>
        <a href={ project.github_url } className='project-link'>GitHub</a>
      </div>
    );
  }
};

const Project = ({ project }) => {
  const projectStack = project.stack.split(',').map((tech, i) => (
    <li key={i}>
      <div className='project-stack'>{tech}</div>
    </li>
  ));

  return (
    <div className='project'>
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

export default Project;
