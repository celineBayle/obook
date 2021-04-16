import { connect } from 'react-redux';
import Team from 'src/components/Project/Team';

import { fetchStudent } from 'src/actions/student';

const mapStateToProps = (state) => ({
  studentLoading: state.student.loading,
  listOfStudents: state.student.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudent: () => {
    dispatch(fetchStudent());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
