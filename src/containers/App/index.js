import { connect } from 'react-redux';
import App from 'src/components/App';

import { isConnectedInSessionOrNot } from 'src/actions/user';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  isConnectedInSessionOrNot: () => {
    dispatch(isConnectedInSessionOrNot());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
