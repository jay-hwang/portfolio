import React from 'react';

const Skills = () => {
  return (
    <div className='skills-box'>
      <div className='skills-bg'>
        <img className='skills-bg-img'
          src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493503084/nodes-connection_ttqk0n.jpg'/>
      </div>

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
    </div>
  );
};

export default Skills;
