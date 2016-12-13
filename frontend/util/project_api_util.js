export const fetchProject = (id, success, error) => {
  $.ajax ({
    method: 'GET',
    url: `api/projects/${id}`,
    success,
    error
  });
};

export const fetchProjects = (success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/projects',
    success,
    error
  });
};
