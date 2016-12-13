import merge from 'lodash/merge';
import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS
} from '../actions/project_actions';

const _defaultState = {
  index: {}
};

const ProjectsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_PROJECTS:
      newState.index = action.projects;
      return newState;

    case RECEIVE_PROJECT:
      newState.index[action.project.id] = action.project;
      return newState;

    default:
      return oldState;
  }
};

export default ProjectsReducer;
