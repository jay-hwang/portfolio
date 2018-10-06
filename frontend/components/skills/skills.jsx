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
              <figure className="front">JavaScript ES6</figure>
              <figure className="back">Solidity</figure>
              <figure className="right">React</figure>
              <figure className="left">Apollo</figure>
              <figure className="top">GraphQL</figure>
              <figure className="bottom">HTML5 & CSS3</figure>
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

