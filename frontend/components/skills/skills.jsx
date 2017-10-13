import React from 'react';

const Skills = () => {
  const projectsClick = () => {
    const wh = $(window).height();
    let skillsHeight = $('.skills').height() + 50;
    $("html, body").animate({ scrollTop: wh + skillsHeight - 60 }, 700);
  };

  return (
    <div className='skills-box'>
      <section className='skills'>
        <span className='title'>LANGUAGES & FRAMEWORKS</span>
        <div className="three-d-cube">
          <div className="cube-container">
            <div id="cube">
              <figure className="front">Rails</figure>
              <figure className="back">SQL</figure>
              <figure className="right">JavaScript</figure>
              <figure className="left">ReactJS</figure>
              <figure className="top">Python</figure>
              <figure className="bottom">HTML / CSS</figure>
            </div>
          </div>
        </div>
      </section>

      <button id="view-projects-btn" onClick={projectsClick}>
        View Projects
      </button>
    </div>
  );
};

export default Skills;

// <div className='skills-bg'>
//   <img className='skills-bg-img'
//     src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493503084/nodes-connection_ttqk0n.jpg'/>
// </div>
