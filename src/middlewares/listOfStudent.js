/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
import axios from 'axios';
import {
  CHANGE_FILTERED_DATA_VALUE,
  saveFilteredDataValue,
} from 'src/actions/listOfStudent';

// pratique avec axios :
// on peut mettre des config par défaut qui seront utilisées pour chaque requete
// https://github.com/axios/axios#config-defaults
axios.defaults.baseURL = 'http://julienv10.sg-host.com';

const listOfStudent = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_FILTERED_DATA_VALUE:
      // console.log(store.getState().student.list);

      // axios.get(`/api/profil/${store.getState().listOfStudent.orientation}/${store.getState().listOfStudent.disponibility}`)
      //   .then((response) => {
      //     store.dispatch(changeFilteredDataValue(response.data));
      //   })
      //   .catch((error) => {
      //     console.log('problème avec la requete fetch filtered student');
      //     console.error(error);
      //   });

      store.dispatch(saveFilteredDataValue([]));

      const { orientation } = store.getState().listOfStudent;
      const { disponibility } = store.getState().listOfStudent;
      console.log(orientation, disponibility);

      const stringToBoolDisponibility = disponibility === 'true';

      const data = store.getState().student.list;

      const isFiltered = data.filter((currentStudent) => {
        if (orientation !== 'allOrientation' && disponibility !== 'allDisponibility') {
          return currentStudent.spe[0].name === orientation && currentStudent.isSearchJob === stringToBoolDisponibility;
        }
        if (orientation === 'allOrientation' && disponibility === 'allDisponibility') {
          return 1 + 1 === 2;
        }
        if (orientation === 'allOrientation') {
          return currentStudent.isSearchJob === stringToBoolDisponibility;
        }
        if (disponibility === 'allDisponibility') {
          return currentStudent.spe[0].name === orientation;
        }
      });
      // console.log('filtré :', isFiltered);
      store.dispatch(saveFilteredDataValue(isFiltered));
  }
  next(action);
};

export default listOfStudent;
