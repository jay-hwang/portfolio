import React from 'react';
import Resume from '../resume/resume';

const About = () => (
  <div className='about'>
    <span className='name'>JAY HWANG</span>
    <p className='intro'>
      <p className='about-me'>
        SOFTWARE ENGINEER WHO ENJOYS BUILDING BEAUTIFUL SOFTWARE THAT MAKES LIFE SIMPLER FOR THE WORLD
      </p>

      <Resume />

      <br/><br/>

      <p className='skills'>
        JQUERY | JAVASCRIPT | REACT.JS | NODE.JS | SQL | RUBY ON RAILS | HTML | CSS
      </p>
    </p>
  </div>
);

export default About;
