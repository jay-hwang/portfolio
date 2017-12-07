import React from 'react';

const ProjectLinks = ({ project }) => {
  // If project has a live demo link, show link. otherwise hide.
  let liveLinkClassName = project.live_url ? 'project-link-btn' : 'display-none';
  return (
    <div className='project-links'>
      <a target='_blank' href={ project.github_url } className='project-link-btn'>GitHub</a>
      <a target='_blank' href={ project.live_url } className={ liveLinkClassName }>Live</a>
    </div>
  );
};

export default ProjectLinks;
