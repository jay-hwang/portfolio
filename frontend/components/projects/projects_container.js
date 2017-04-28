import { connect } from 'react-redux';
import Projects from './projects';

const mapStateToProps = state => ({
  projects: state.projects.index
});

const mapDispatchToProps = dispatch => ({

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Projects);
