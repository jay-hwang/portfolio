import React from 'react';

const ProjectLinks = ({ project }) => {
  // If project has a live demo link, show link. otherwise hide.
  let liveLinkClassName = project.live_url ? 'project-link-btn' : 'display-none';
  return (
    <div className='project-links'>
      <div className='project-link-btn'>
        <a target='_blank' href={ project.github_url } className='project-link'>GitHub</a>
      </div>
      <div className={ liveLinkClassName }>
        <a target='_blank' href={ project.live_url } className='project-link'>Live</a>
      </div>
    </div>
  );
};

export default ProjectLinks;
