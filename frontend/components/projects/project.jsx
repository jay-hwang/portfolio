import React from 'react';
import ProjectMobile from './project_mobile';

const Project = ({ project }) => {
  const projectStack = project.stack.split(',').map((tech, i) => (
    <li key={i}>
      <div className='project-stack'>{tech}</div>
    </li>
  ));

  return (
    <div>
      <ProjectMobile project={ project } projectStack={ projectStack } />
    </div>
  );
};

export default Project;
