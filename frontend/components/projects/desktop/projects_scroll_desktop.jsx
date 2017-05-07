import React from 'react';
import ProjectsScroll from '../projects_scroll';

const ProjectsScrollDesktop = ({ projectLis }) => {
  const scrollBalance = { left: 0, right: 4 };

  const scrollRight = () => {
    if (scrollBalance.right > 0) {
      $('.projects-ul').animate({ left: '-=740' }, 200);
      scrollBalance.right--;
      scrollBalance.left++;
      $('.left-arrow-box').fadeIn(); }
    if (scrollBalance.right <= 0) { $('.right-arrow-box').fadeOut(); }
  };

  const scrollLeft = () => {
    if (scrollBalance.left > 0) {
      $('.projects-ul').animate({ left: '+=740' }, 200);
      scrollBalance.left--;
      scrollBalance.right++;
      $('.right-arrow-box').fadeIn(); }
    if (scrollBalance.left <= 0) { $('.left-arrow-box').fadeOut(); }
  };

  return (
    <section className='projects desktop'>
      <h3 className='title' id='projects-title'>PROJECTS</h3>

      <div className='projects-scroll'>

        <div className='left-arrow-box arrow-box display-none desktop'>
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

        <div className='right-arrow-box arrow-box desktop'>
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

export default ProjectsScrollDesktop;
