import { SAVE_STUDENT, PUT_ID_OF_STUDENT_PAGE, SAVE_STUDENT_WITH_ID } from 'src/actions/student';

export const initialState = {
  idOfStudentPage: '',
  dataStudentWithId: {},
  list: [],
  loading: true,
  loadingWithId: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_STUDENT:
      return {
        ...state,
        list: action.student,
        loading: false,
      };
    case SAVE_STUDENT_WITH_ID:
      return {
        ...state,
        dataStudentWithId: action.student,
        loadingWithId: false,
      };
    case PUT_ID_OF_STUDENT_PAGE:
      return {
        ...state,
        idOfStudentPage: action.idOfStudentPage,
      };
    default:
      return state;
  }
};

export default reducer;
