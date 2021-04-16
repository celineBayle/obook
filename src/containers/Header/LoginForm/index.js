import { connect } from 'react-redux';
import LoginForm from 'src/components/Header/LoginForm';

import { login, changeValue } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  ErrorOnSubmitLogin: state.user.ErrorOnSubmitLogin,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => {
    dispatch(login());
  },
  changeField: (newValue, name) => {
    dispatch(changeValue(newValue, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
