import { connect } from 'react-redux';
import Work from './work';

const mapStateToProps = state => {
  return {
    projects: state.projects.index
  };
};

export default connect(
  mapStateToProps
)(Work);
