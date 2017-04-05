import React from 'react';
import Resume from '../resume/resume';
import AboutDetail from './about_detail';

const About = () => (
  <div>
    <div className='about desktop'>
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

    <div className='about-mobile mobile'>
      <span className='name-mobile'>JAY HWANG</span>
      <div className='intro-mobile'>
        <p className='about-me-mobile'>
          SOFTWARE DEVELOPER
        </p>

        <br/>

        <div className='skills-mobile'>
          <span>
            RUBY | RUBY ON RAILS
          </span>
          <span>
            SQL | POSTGRESQL | RSPEC
          </span>
          <span>
            JAVASCRIPT | ES6
          </span>
          <span>
            JQUERY | EXPRESS.JS
          </span>
          <span>
            REACT.JS | ANGULAR.JS
          </span>
          <span>
            PYTHON | NODE.JS
          </span>
          <span>
            GIT | HTML5 | CSS
          </span>
          <span>
            PHOTOSHOP | WEBPACK
          </span>
        </div>
      </div>
      <AboutDetail />
    </div>
  </div>
);

export default About;
