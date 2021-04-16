/* eslint-disable default-case */
import axios from 'axios';
import {
  FETCH_STUDENT,
  FETCH_STUDENT_BY_ID,
  saveStudent,
  saveStudentWithId,
} from 'src/actions/student';
import {
  changeFilteredDataValue,
} from 'src/actions/listOfStudent';

// pratique avec axios :
// on peut mettre des config par défaut qui seront utilisées pour chaque requete
// https://github.com/axios/axios#config-defaults
axios.defaults.baseURL = 'http://julienv10.sg-host.com';

const StudentAjax = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      axios.get('/api/profil')
        .then((response) => {
          store.dispatch(saveStudent(response.data));
          store.dispatch(changeFilteredDataValue());
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    case FETCH_STUDENT_BY_ID:
      axios.get(`/api/profil/${store.getState().student.idOfStudentPage}`)
        .then((response) => {
          store.dispatch(saveStudentWithId(response.data));
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(saveStudentWithId({}));
        });
      break;
  }
  next(action);
};

export default StudentAjax;
