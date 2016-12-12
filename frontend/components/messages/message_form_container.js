import { connect } from 'react-redux';
import MessageForm from './message_form';
import {
  createMessage,
  deleteMessage
} from '../../actions/message_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  loggedIn: state.session.currentUser ? true : false,
  errors: []
});

const mapDispatchToProps = (dispatch) => ({
  createMessage: message => dispatch(createMessage(message)),
  deleteMessage: messageId => dispatch(deleteMessage(messageId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
