import React from 'react';
import WorkItemMenu from './work_item_menu';
import WorkItemDetail from './work_item_detail';

const WorkItem = ({ project }) => {
  const _redirectTo = (url) => (
    () => window.open(`${url}`)
  );

  const _showMenu = (projectObj) => (
    () => {
      $(`#${projectObj.id}`).slideDown(200);
      $(`#${projectObj.id}-view`).fadeIn(200);
    }
  );

  const _hideMenu = (projectObj) => (
    () => {
      $(`#${projectObj.id}`).slideUp(200);
      $(`#${projectObj.id}-view`).fadeOut(200);
    }
  );

  const liveUrl = project.live_url || project.github_url;

  return (
    <div>
      <li className='work-item'>
        <div className={project.title} id='work-item-image'></div>
        <div id='work-item-image'>
          <div
            onMouseEnter={_showMenu(project)}
            onMouseLeave={_hideMenu(project)}
            className='work-item-image-layer'>
            <div
              onClick={_redirectTo(liveUrl)}
              className='view-project'
              id={`${project.id}-view`}>
              <img
                className='view-project-icon'
                src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1481662173/dark-eye_cfffps.png"/>
              <div className='view-live'>
                <div></div>
                <span>VIEW LIVE</span>
              </div>
            </div>
            <WorkItemMenu project={project} />
          </div>
        </div>
        <span className='project-title'>{project.title.toUpperCase()}</span>
      </li>
    </div>
  );
};

export default WorkItem;
