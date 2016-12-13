import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MessagesReducer from './messages_reducer';
import ProjectsReducer from './projects_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  messages: MessagesReducer,
  projects: ProjectsReducer
});

export default RootReducer;
