import {
  REQUEST_PROJECT,
  REQUEST_PROJECTS,
  requestProject,
  requestProjects,
  receiveProject,
  receiveProjects
} from '../actions/project_actions';

import {
  fetchProject,
  fetchProjects
} from '../util/project_api_util';

const ProjectsMiddleware = ({getState, dispatch}) => next => action => {
  const projectSuccess = data => {
    dispatch(receiveProject(data));
  };

  const projectsSuccess = data => {
    dispatch(receiveProjects(data));
  };

  switch(action.type) {
    case REQUEST_PROJECT:
      fetchProject(action.projectId, projectSuccess);
      return next(action);

    case REQUEST_PROJECTS:
      fetchProjects(projectsSuccess);
      return next(action);

    default:
      return next(action);
  }
};

export default ProjectsMiddleware;
