import { connect } from 'react-redux';
import LastProducts from 'src/components/Home/LastProducts';

import { fetchProject } from 'src/actions/project';

const mapStateToProps = (state) => ({
  listOfProject: state.project.list,
  loading: state.project.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProject: () => {
    dispatch(fetchProject());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LastProducts);
