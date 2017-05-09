import { connect } from 'react-redux';
import InstaProjects from './insta_projects';

const mapStateToProps = state => ({
  projects: state.projects.index
});

const mapDispatchToProps = dispatch => ({

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(InstaProjects);
