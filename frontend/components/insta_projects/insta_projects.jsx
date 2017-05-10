import React from 'react';
import InstaProject from './insta_project';
import InstaProjectDetail from './insta_project_detail';
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
    } else if (i < 9) {
      projectLis = projectLis3;
    } else {
      projectLis = [];
    }
    projectLis.push(
      <li key={key} className='insta-project-li' id={id}>
        <InstaProject project={projects[key]} />
        <InstaProjectDetail project={ projects[key] } />
      </li>
    );
  });

  return (
    <section className='insta-projects-section'>
      <h3 className='title' id='projects-title'>PROJECTS</h3>
      <div className='insta-projects-box'>
        <ul className='insta-projects'>
          { projectLis1 }
        </ul>
      </div>
      <div className='insta-projects-box display-none' id='projectLis1'>
        <ul className='insta-projects'>
          { projectLis2 }
        </ul>
      </div>
      <div className='insta-projects-box display-none' id='projectLis2'>
        <ul className='insta-projects'>
          { projectLis3 }
        </ul>
      </div>
      <ViewMoreBtn />
    </section>
  );
};

export default InstaProjects;
