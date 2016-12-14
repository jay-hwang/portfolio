import React from 'react';

const WorkItemDetail = ({ project }) => {
  const _handleClose = () => {
    $(`#work-item-detail-${project.id}`).fadeOut();
    $('.work-items').fadeIn();
    $('.modal-header').fadeIn();
    $('.close').fadeIn();
  };

  const _getLinks = () => {
    let github = project.github_url;
    let live = project.live_url;

    if (live) {
      return (
        <div className='side'>
          <span className='flex-link'>GITHUB</span>
          <span className='flex-link'>LIVE</span>
        </div>
      );
    } else {
      return (
        <div className='side'>
          <span className='flex-link'>GITHUB</span>
        </div>
      );
    }
  };

  return (
    <div
      id={`work-item-detail-${project.id}`}
      className='work-item-detail'>
      <span
        onClick={_handleClose}
        className='detail-close'>x
      </span>

      <div className='flex-details'>
        <div className='flex-links'>
          {_getLinks()}

          <span className='project-detail-header'>
            {project.title.toUpperCase()}
          </span>

          <div className='side'></div>
        </div>

        <img
          className='project-detail-image'
          src={project.image_url} />

        <p className='project-detail-desc'>
          {project.description}
        </p>


      </div>

    </div>
  );
};

export default WorkItemDetail;
