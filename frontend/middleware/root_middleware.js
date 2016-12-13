import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import MessagesMiddleware from './messages_middleware';
import ProjectsMiddleware from './projects_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  MessagesMiddleware,
  ProjectsMiddleware
);

export default RootMiddleware;
