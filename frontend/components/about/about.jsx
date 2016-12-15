import React from 'react';
import Resume from '../resume/resume';
import AboutDetail from './about_detail';

const About = () => (
  <div className='about'>
    <span className='name'>JAY HWANG</span>
    <div className='intro'>
      <p className='about-me'>
        SOFTWARE ENGINEER WHO ENJOYS BUILDING BEAUTIFUL SOFTWARE THAT MAKES LIFE SIMPLER FOR THE WORLD
      </p>

      <Resume />

      <br/><br/>

      <p className='skills'>
        JQUERY | JAVASCRIPT | REACT.JS | NODE.JS | SQL | RUBY ON RAILS | HTML | CSS
      </p>
    </div>
    <AboutDetail />
  </div>
);

export default About;
