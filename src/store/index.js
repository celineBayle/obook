import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import StudentAjax from 'src/middlewares/StudentAjax';
import ProjectAjax from 'src/middlewares/ProjectAjax';
import UserAjax from 'src/middlewares/UserAjax';
import listOfStudent from 'src/middlewares/listOfStudent';
import listOfProject from 'src/middlewares/listOfProject';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    StudentAjax,
    ProjectAjax,
    UserAjax,
    listOfStudent,
    listOfProject,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
