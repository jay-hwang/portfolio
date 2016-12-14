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
          <a
            target="_blank"
            href={project.github_url}>
            <span className='flex-link'>GITHUB</span>
          </a>

          <a
            target="_blank"
            href={project.live_url}>
            <span className='flex-link'>LIVE</span>
          </a>
        </div>
      );
    } else {
      return (
        <div className='side'>
          <a
            target="_blank"
            href={project.github_url}>
            <span className='flex-link'>GITHUB</span>
          </a>
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
          <span className='project-detail-header'>
            {project.title.toUpperCase()}
          </span>
        </div>

        <img
          className='project-detail-image'
          src={project.image_url} />

        <p className='project-detail-desc'>
          {project.description}
        </p>

        <span className='margin-bottom'>{_getLinks()}</span>

      </div>

    </div>
  );
};

export default WorkItemDetail;
