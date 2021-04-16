/* eslint-disable no-undef */
import {
  CHANGE_VALUE,
  SAVE_USER,
  LOGOUT,
  IS_CONNECTED_IN_SESSION_OR_NOT,
  SAVE_LIST_OF_SPE,
  CHANGE_ONE_CHOICE_VALUE,
  PUT_PICTURE,
  SAVE_LIST_OF_TECHNO,
  CHANGE_MULTICHOICE_VALUE,
  SAVE_LIST_OF_CONTRACT,
  SUBSCRIBE_CHANGE_STATUS,
  ERROR_ON_SUBMIT_LOGIN,
} from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  lastname: '',
  firstname: '',
  description: '',
  technos: [],
  orientation: 8,
  contract: [],
  is_search_job: true,

  picture: '',

  listOfSpe: [],
  listOfTechno: [],
  listOfContract: [],

  logged: false,
  subscribed: false,
  id: '',

  ErrorOnSubmitLogin: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        pseudo: action.pseudo,
        token: action.token,
        password: '',
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        email: '',
      };
    case SUBSCRIBE_CHANGE_STATUS:
      return {
        ...state,
        subscribed: !state.subscribed,
      };
    case IS_CONNECTED_IN_SESSION_OR_NOT:
      return {
        ...state,
        logged: action.logged,
      };
    case SAVE_LIST_OF_SPE:
      return {
        ...state,
        listOfSpe: action.value,
      };
    case CHANGE_ONE_CHOICE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_LIST_OF_TECHNO:
      return {
        ...state,
        listOfTechno: action.value,
      };
    case SAVE_LIST_OF_CONTRACT:
      return {
        ...state,
        listOfContract: action.value,
      };
    case CHANGE_MULTICHOICE_VALUE:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case PUT_PICTURE:
      return {
        ...state,
        picture: action.value,
      };
    case ERROR_ON_SUBMIT_LOGIN:
      return {
        ...state,
        ErrorOnSubmitLogin: !state.ErrorOnSubmitLogin,
      };
    default:
      return state;
  }
};

export default reducer;
