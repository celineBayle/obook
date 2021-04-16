import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profil from 'src/components/Profil';

import { fetchStudent, putIdOfStudentPage, fetchStudentById } from 'src/actions/student';
import { fetchProject } from 'src/actions/project';

const mapStateToProps = (state) => ({
  listOfStudents: state.student.list,
  dataStudentWithId: state.student.dataStudentWithId,
  dataStudentLoading: state.student.loading,
  loadingWithId: state.student.loadingWithId,
  listOfProject: state.project.list,
  projectLoading: state.project.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchStudent: () => {
    dispatch(fetchStudent());
  },
  putIdOfStudentPage: () => {
    dispatch(putIdOfStudentPage(ownProps.match.params.id));
  },
  fetchStudentById: () => {
    dispatch(fetchStudentById());
  },
  fetchProject: () => {
    dispatch(fetchProject());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Profil);
const containerWithRouter = withRouter(container);

export default containerWithRouter;
