import { combineReducers } from 'redux';

import studentReducer from './student';
import projectReducer from './project';
import userReducer from './user';
import listOfStudentReducer from './listOfStudent';
import listOfProjectReducer from './listOfProject';

const rootReducer = combineReducers({
  student: studentReducer,
  project: projectReducer,
  user: userReducer,
  listOfStudent: listOfStudentReducer,
  listOfProject: listOfProjectReducer,
});

export default rootReducer;
