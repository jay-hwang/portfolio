export const createMessage = (message, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/messages',
    data: { message },
    success,
    error
  });
};

export const deleteMessage = (id, success, error) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/spots/${id}`,
    success,
    error
  });
};

export const fetchMessage = (id, success, error) => {
  $.ajax ({
    method: 'GET',
    url: `api/spots/${id}`,
    success,
    error
  });
};

export const fetchMessages = (success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/spots',
    success,
    error
  });
};
