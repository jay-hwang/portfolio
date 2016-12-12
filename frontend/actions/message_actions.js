export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const createMessage = message => ({
  type: CREATE_MESSAGE,
  message
});

export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const deleteMessage = id => ({
  type: DELETE_MESSAGE,
  id
});

export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const removeMessage = id => ({
  type: REMOVE_MESSAGE,
  id
});

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const REQUEST_MESSAGE = "REQUEST_MESSAGE";
export const requestMessage = messageId => ({
  type: REQUEST_MESSAGE,
  messageId
});

export const REQUEST_MESSAGES = "REQUEST_MESSAGES";
export const requestMessages = () => ({
  type: REQUEST_MESSAGES,
});

export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const receiveMessageErrors = (errors) => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});
