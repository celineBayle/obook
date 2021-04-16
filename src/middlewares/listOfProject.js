/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
import axios from 'axios';
import {
  FETCH_FILTERED_PROJECT,
  saveFilteredProjectData,
} from 'src/actions/listOfProject';

// pratique avec axios :
// on peut mettre des config par défaut qui seront utilisées pour chaque requete
// https://github.com/axios/axios#config-defaults
axios.defaults.baseURL = 'http://julienv10.sg-host.com';

const listOfProject = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_FILTERED_PROJECT:
      if (state.listOfProject.filtered === 'true') {
        axios.get((`/api/project/search?apotheose=${state.listOfProject.filtered}`))
          .then((response) => {
            console.log('apotheose');
            store.dispatch(saveFilteredProjectData(response.data));
          })
          .catch((error) => {
            console.error('Il y a un soucis', error);
          });
      }
      else {
        axios.get(('/api/project/'))
          .then((response) => {
            console.log('tous les projets');
            store.dispatch(saveFilteredProjectData(response.data));
          })
          .catch((error) => {
            console.error('Il y a un soucis', error);
          });
      }
      break;
  }
  next(action);
};

export default listOfProject;
