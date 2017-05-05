import React from 'react';

const ProjectLinks = ({ project }) => {
  if (project.live_url) {
    return (
      <div className='project-links'>
        <div className='project-link-btn'>
          <a target='_blank' href={ project.github_url } className='project-link'>GitHub</a>
        </div>
        <div className='project-link-btn'>
          <a target='_blank' href={ project.live_url } className='project-link'>Live</a>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className='project-links'>
        <div className='project-link-btn'>
          <a target='_blank' href={ project.github_url } className='project-link'>GitHub</a>
        </div>
      </div>
    );
  }
};

export default ProjectLinks;
