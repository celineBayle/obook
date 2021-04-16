import { connect } from 'react-redux';
import Filter from 'src/components/AllProject/Filter';

import { ChangeFilterSortValue } from 'src/actions/listOfProject';

const mapStateToProps = (state) => ({
  filtered: state.listOfProject.filtered,
  options: state.listOfProject.options,
});

const mapDispatchToProps = (dispatch) => ({
  ChangeFilterSortValue: (value) => {
    dispatch(ChangeFilterSortValue(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
