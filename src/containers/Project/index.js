import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Project from 'src/components/Project';

import { putIdOfProjectPage, fetchProjectById } from 'src/actions/project';
import { fetchStudent } from 'src/actions/student';

const mapStateToProps = (state) => ({
  dataProjectWithId: state.project.dataProjectWithId,
  dataProjectLoading: state.project.loading,
  dataProjectWithIdLoading: state.project.dataProjectWithIdLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  putIdOfProjectPage: () => {
    dispatch(putIdOfProjectPage(ownProps.match.params.id));
  },
  fetchProjectById: () => {
    dispatch(fetchProjectById());
  },
  fetchStudent: () => {
    dispatch(fetchStudent());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Project);
const containerWithRouter = withRouter(container);

export default containerWithRouter;
