import React from 'react';
import Project from './project';

const Projects = ({ projects }) => {
  const projectLis = Object.keys(projects).map(key => (
    <li key={key} className='project-li'>
      <Project project={projects[key]} />
    </li>
  ));

  return (
    <section className='projects'>
      <h3 className='title' id='projects-title'>PROJECTS</h3>
      <ul className='projects-ul'>
        { projectLis }
      </ul>
    </section>
  );
};

export default Projects;
