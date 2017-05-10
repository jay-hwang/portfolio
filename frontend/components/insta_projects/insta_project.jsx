import React from 'react';
import InstaProjectDetail from './insta_project_detail';

const InstaProject = ({ project }) => {
  const handleClick = id => e => $(`#insta-project-detail-${id}`).fadeIn();

  return (
    <div className='insta-project' onClick={ handleClick(project.id) }>
      <img src={ project.image_url } className='insta-project-img' />
    </div>
  );
};

export default InstaProject;
