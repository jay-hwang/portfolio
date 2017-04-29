import React from 'react';

const Skills = () => {
  return (
    <section className='skills'>

      <span className='title'>SKILLS</span>
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
  );
};

export default Skills;
