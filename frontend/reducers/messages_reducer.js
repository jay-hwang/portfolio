import merge from 'lodash/merge';
import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE_ERRORS
} from '../actions/message_actions';

const _defaultState = {
  index: {},
  errors: []
};

const MessagesReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case  RECEIVE_SPOTS:
      newState.index = action.messages;
      return newState;

    case RECEIVE_SPOT:
      newState.index[action.message.id] = action.message;
      newState.errors = [];
      return newState;

    case RECEIVE_MESSAGE_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default MesagesReducer;
