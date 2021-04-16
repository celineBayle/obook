import { connect } from 'react-redux';
import AllStudent from 'src/components/AllStudent';

import { changeFilteredDataValue } from 'src/actions/listOfStudent';
import { fetchStudent } from 'src/actions/student';

const mapStateToProps = (state) => ({
  orientation: state.listOfStudent.orientation,
  disponibility: state.listOfStudent.disponibility,
  filteredata: state.listOfStudent.filteredata,
  loading: state.student.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilteredDataValue: () => {
    dispatch(changeFilteredDataValue());
  },
  fetchStudent: () => {
    dispatch(fetchStudent());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllStudent);
