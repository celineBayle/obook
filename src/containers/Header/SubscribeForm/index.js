import { connect } from 'react-redux';
import SubscribeForm from 'src/components/Header/SubscribeForm';

import {
  subscribe,
  changeValue,
  fetchSpe,
  changeOneChoiceValue,
  putPicture,
  fetchTechno,
  fetchContract,
  changeMultichoiceValue,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  lastname: state.user.lastname,
  firstname: state.user.firstname,
  description: state.user.description,

  listOfSpe: state.user.listOfSpe,
  listOfTechno: state.user.listOfTechno,
  listOfContract: state.user.listOfContract,

  orientation: state.user.orientation,
  contract: state.user.contract,

  subscribed: state.user.subscribed,
});

const mapDispatchToProps = (dispatch) => ({
  subscribe: () => {
    dispatch(subscribe());
  },
  changeField: (newValue, name) => {
    dispatch(changeValue(newValue, name));
  },
  fetchSpe: () => {
    dispatch(fetchSpe());
  },
  changeOneChoiceValue: (value, name) => {
    dispatch(changeOneChoiceValue(value, name));
  },
  changeMultichoiceValue: (value, name) => {
    dispatch(changeMultichoiceValue(value, name));
  },
  fetchTechno: () => {
    dispatch(fetchTechno());
  },
  fetchContract: () => {
    dispatch(fetchContract());
  },
  putPicture: (value) => {
    dispatch(putPicture(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeForm);
