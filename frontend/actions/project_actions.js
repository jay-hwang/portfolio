export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const REQUEST_PROJECT = "REQUEST_PROJECT";
export const requestProject = () => ({
  type: REQUEST_PROJECT
});

export const REQUEST_PROJECTS = "REQUEST_PROJECTS";
export const requestProjects = () => ({
  type: REQUEST_PROJECTS
});
