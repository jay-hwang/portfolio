import React from 'react';
import Project from './project';
import ProjectsScrollMobile from './projects_mobile';
import ProjectsScrollDesktop from './projects_desktop';

const Projects = ({ projects }) => {
  let id = null;
  const projectLis = Object.keys(projects).map((key, i) => {
    id = `project${i}`;
    return (
      <li key={key} className='project-li transparent' id={id}>
        <Project project={projects[key]} />
      </li>
    );
  });

  return (
    <section className='projects'>
      <h3 className='title' id='projects-title'>PROJECTS</h3>
      <ProjectsScrollMobile projectLis={ projectLis } />
      <ProjectsScrollDesktop projectLis={ projectLis } />
    </section>
  );
};

export default Projects;
