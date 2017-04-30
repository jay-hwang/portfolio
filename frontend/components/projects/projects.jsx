import React from 'react';
import Project from './project';

const Projects = ({ projects }) => {
  const projectLis = Object.keys(projects).map(key => (
    <li key={key} className='project-li'>
      <Project project={projects[key]} />
    </li>
  ));

  const scrollRight = () => {
    $('.projects-ul').animate({ left: '-=740' }, 200);
  };

  const scrollLeft = () => {
    $('.projects-ul').animate({ left: '+=740' }, 200);
  };

  return (
    <section className='projects'>
      <h3 className='title' id='projects-title'>PROJECTS</h3>

      <div className='projects-scroll'>

        <div className='left-arrow-box arrow-box'>
          <div className='backward-circle arrow-circle'
            onClick={ scrollLeft }>
            <img className='arrow-img'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493512202/left-arrow_sbunnt.png' />
          </div>
        </div>

        <div className='projects-window'>
          <ul className='projects-ul'>
            { projectLis }
          </ul>
        </div>

        <div className='right-arrow-box arrow-box'>
          <div className='forward-circle arrow-circle'
            onClick={ scrollRight }>
            <img className='arrow-img'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493511005/arrow_r5mjhk.png' />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
