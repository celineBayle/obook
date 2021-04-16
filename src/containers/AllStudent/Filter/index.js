import { connect } from 'react-redux';
import Filter from 'src/components/AllStudent/Filter';

import { ChangeFilterSortValue } from 'src/actions/listOfStudent';

const mapStateToProps = (state) => ({
  filterSortOrientationValue: state.listOfStudent.orientation,
  filterSortDisponibilityValue: state.listOfStudent.disponibility,
  filterSortOrientationOption: state.listOfStudent.filterSortOrientationOption,
  filterSortDisponibilityOption: state.listOfStudent.filterSortDisponibilityOption,
});

const mapDispatchToProps = (dispatch) => ({
  ChangeFilterSortValue: (radioName, value) => {
    dispatch(ChangeFilterSortValue(radioName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
