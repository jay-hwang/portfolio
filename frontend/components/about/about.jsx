import React from 'react';
import Resume from '../resume/resume';
import AboutDetail from './about_detail';

const About = () => (
  <div className='about'>
    <span className='name'>JAY HWANG</span>
    <div className='intro'>
      <p className='about-me'>
        SOFTWARE DEVELOPER
      </p>

      <br/>

      <div className='skills'>
        <span>
          RUBY | RUBY ON RAILS | RSPEC | PYTHON | SQL | POSTGRESQL
        </span>
        <span>
          JAVASCRIPT | ES6 | REACT.JS | ANGULAR.JS | EXPRESS.JS | NODE.JS | JQUERY
        </span>
        <span>
          GIT | HTML5 | CSS | PHOTOSHOP | WEBPACK
        </span>
      </div>
    </div>
    <AboutDetail />
  </div>
);

export default About;
