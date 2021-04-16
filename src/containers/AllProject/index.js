import { connect } from 'react-redux';
import AllProject from 'src/components/AllProject';

import { fetchFilteredProject } from 'src/actions/listOfProject';

const mapStateToProps = (state) => ({
  filteredProjects: state.listOfProject.filteredProjects,
  filtered: state.listOfProject.filtered,
  loading: state.listOfProject.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilteredProject: () => {
    dispatch(fetchFilteredProject());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProject);
