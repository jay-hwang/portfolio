import React from 'react';

const InstaProject = ({ project }) => (
  <div className='insta-project'>
    <img src={ project.image_url } className='insta-project-img' />
  </div>
);

export default InstaProject;
