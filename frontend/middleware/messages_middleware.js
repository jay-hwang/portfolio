import {
  CREATE_MESSAGE,
  DELETE_MESSAGE,
  REQUEST_MESSAGE,
  REQUEST_MESSAGES,
  requestMessages,
  removeMessage,
  receiveMessage,
  receiveMessages,
  receiveMessageErrors
} from '../actions/message_actions';

import {
  createMessage,
  deleteMessage,
  fetchMessage,
  fetchMessages
} from '../util/message_api_util';

const MessagesMiddleware = ({ getState, dispatch }) => next => action => {
  const messageSuccess = data => {
    dispatch(receiveMessage(data));
    alert('Thank you! Your message has been received.');
  };

  const messagesSuccess = data => {
    dispatch(receiveMessages(data));
  };

  const deleteMessageSuccess = data => {
    dispatch(removeMessage(data));
  };

  const errorCallback = errors => {
    dispatch(receiveMessageErrors(errors.responseJSON));
  };

  switch(action.type) {
    case CREATE_MESSAGE:
      createMessage(action.message, messageSuccess, errorCallback);
      return next(action);

    case DELETE_MESSAGE:
      deleteMessage(action.id, deleteMessageSuccess, errorCallback);
      return next(action);

    case REQUEST_MESSAGE:
      fetchMessage(action.messageId, messageSuccess, errorCallback);
      return next(action);

    case REQUEST_MESSAGES:
      fetchMessages(messagesSuccess, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default MessagesMiddleware;
