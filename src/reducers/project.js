import {
  SAVE_PROJECT,
  PUT_ID_OF_PROJECT_PAGE,
  SAVE_PROJECT_WITH_ID,
  CHANGE_INPUT_VALUE,
  PROJECT_IS_CREATED,
  PROJECT_ERROR_ON_THE_CREATION,
} from 'src/actions/project';

export const initialState = {
  idOfProjectPage: '',
  dataProjectWithId: {},
  dataProjectWithIdLoading: true,
  list: [],
  loading: true,

  name: '',
  description: '',
  youtube: '',
  github: '',
  prod: '',
  is_apotheose: 'false',

  projectCreated: false,
  ErrorOnTheProjectCreation: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROJECT:
      return {
        ...state,
        list: action.project,
        loading: false,
      };
    case SAVE_PROJECT_WITH_ID:
      return {
        ...state,
        dataProjectWithId: action.project,
        dataProjectWithIdLoading: false,
      };
    case PUT_ID_OF_PROJECT_PAGE:
      return {
        ...state,
        idOfProjectPage: action.idOfProjectPage,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case PROJECT_IS_CREATED:
      return {
        ...state,
        projectCreated: !state.projectCreated,
      };
    case PROJECT_ERROR_ON_THE_CREATION:
      return {
        ...state,
        ErrorOnTheProjectCreation: !state.ErrorOnTheProjectCreation,
      };
    default:
      return state;
  }
};

export default reducer;
