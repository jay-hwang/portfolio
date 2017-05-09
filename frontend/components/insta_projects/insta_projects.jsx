import React from 'react';
import InstaProject from './insta_project';
import ViewMoreBtn from './view_more_btn';

const InstaProjects = ({ projects }) => {
  let id          = null,
      projectLis  = null,
      projectLis1 = [],
      projectLis2 = [],
      projectLis3 = [];

  Object.keys(projects).forEach((key, i) => {
    id = `project${i}`;
    if (i < 3) {
      projectLis = projectLis1;
    } else if (i < 6) {
      projectLis = projectLis2;
    } else {
      projectLis = projectLis3;
    }
    projectLis.push(
      <li key={key} className='insta-project-li' id={id}>
        <InstaProject project={projects[key]} />
      </li>
    );
  });

  return (
    <section className='insta-projects-section'>
      <h3 className='title' id='projects-title'>PROJECTS</h3>
      <ul className='insta-projects'>
        { projectLis1 }
      </ul>
      <ul className='insta-projects display-none' id='projectLis1'>
        { projectLis2 }
      </ul>
      <ul className='insta-projects display-none' id='projectLis2'>
        { projectLis3 }
      </ul>
      <ViewMoreBtn />
    </section>
  );
};

export default InstaProjects;
