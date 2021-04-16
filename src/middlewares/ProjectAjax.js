/* eslint-disable default-case */
import axios from 'axios';
import {
  FETCH_PROJECT,
  FETCH_PROJECT_BY_ID,
  saveProject,
  saveProjectWithId,
  CREATE_PROJECT,
  projectIsCreated,
  projectErrorOnTheCreation,
} from 'src/actions/project';

// pratique avec axios :
// on peut mettre des config par défaut qui seront utilisées pour chaque requete
// https://github.com/axios/axios#config-defaults
axios.defaults.baseURL = 'http://julienv10.sg-host.com';

const ProjectAjax = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_PROJECT:
      axios.get('/api/project/')
        .then((response) => {
          store.dispatch(saveProject(response.data));
        })
        .catch((error) => {
          console.log('problème avec la requete fetch projet');
          console.error(error);
        });
      break;
    case CREATE_PROJECT:
      axios.post('/api/project/', {
        name: state.project.name,
        description: state.project.description,
        prod_link: state.project.prod,
        git_link: state.project.github,
        is_apotheose: state.project.is_apotheose,
        youtube_link: state.project.youtube,
        teams: [
          {
            user_id: sessionStorage.getItem('user_id'),
            Is_active: true,
          },
        ],
      })
        .then((response) => {
          axios.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          store.dispatch(projectIsCreated());
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
        .catch((error) => {
          store.dispatch(projectErrorOnTheCreation());
          console.error('Il y a un soucis', error);
        });
      break;
    case FETCH_PROJECT_BY_ID:
      axios.get(`/api/project/${store.getState().project.idOfProjectPage}`)
        .then((response) => {
          store.dispatch(saveProjectWithId(response.data));
        })
        .catch((error) => {
          console.log('problème avec la requete fetch projet avec ID');
          store.dispatch(saveProjectWithId());
          console.error(error);
        });
      break;
  }
  next(action);
};

export default ProjectAjax;
