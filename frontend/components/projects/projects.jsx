import React from 'react';
import Project from './project';

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

  const scrollBalance = {
    mobile:  { left: 0, right: 10},
    tablet:  { left: 0, right: 4 },
    desktop: { left: 0, right: 4 }
  };

  const scrollRight = () => {
    if (scrollBalance.desktop.right > 0) {
      $('.projects-ul').animate({ left: '-=740' }, 200);
      scrollBalance.desktop.right--;
      scrollBalance.desktop.left++;
      $('.left-arrow-box').fadeIn();
    }
    if (scrollBalance.desktop.right <= 0) { $('.right-arrow-box').fadeOut(); }
  };

  const scrollLeft = () => {
    if (scrollBalance.desktop.left > 0) {
      $('.projects-ul').animate({ left: '+=740' }, 200);
      scrollBalance.desktop.left--;
      scrollBalance.desktop.right++;
      $('.right-arrow-box').fadeIn();
    }
    if (scrollBalance.desktop.left <= 0) { $('.left-arrow-box').fadeOut(); }
  };

  return (
    <section className='projects'>
      <h3 className='title' id='projects-title'>PROJECTS</h3>

      <div className='projects-scroll'>

        <div className='left-arrow-box arrow-box display-none'>
          <div className='left-circle arrow-circle'
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
          <div className='right-circle arrow-circle'
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
