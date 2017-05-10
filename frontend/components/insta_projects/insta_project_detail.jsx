import React from 'react';

const InstaProjectDetail = ({ project }) => {
  const id = `insta-project-detail-${project.id}`;
  return (
    <div className='insta-project-detail display-none' id={id}>
      { project.title }
    </div>
  );
};

export default InstaProjectDetail;
