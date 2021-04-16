/* eslint-disable default-case */
import axios from 'axios';

import {
  LOGIN,
  saveUser,
  saveListOfSpe,
  saveListOfSTechno,
  saveListOfContract,
  subscribeChangeStatus,
  ErrorOnSubmitLogin,
  LOGOUT,
  SUBSCRIBE,
  FETCH_SPE,
  FETCH_TECHNO,
  FETCH_CONTRACT,
} from 'src/actions/user';

// pratique avec axios :
// on peut mettre des config par défaut qui seront utilisées pour chaque requete
// https://github.com/axios/axios#config-defaults
axios.defaults.baseURL = 'http://julienv10.sg-host.com';

const UserAjax = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case LOGIN:
    {
      axios.post('/api/login_check', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveUser('username', response.data.token));

          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('user_id', response.data.user.id);
          sessionStorage.setItem('user_email', response.data.user.email);
          sessionStorage.setItem('user_firstname', response.data.user.firstname);
          sessionStorage.setItem('user_lastname', response.data.user.lastname);
          sessionStorage.setItem('user_story', response.data.user.story);
          axios.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          window.location.reload();
        })
        .catch((error) => {
          store.dispatch(ErrorOnSubmitLogin());
          console.error('Il y a un soucis', error);
        });
      break;
    }
    case FETCH_SPE:
      axios.get('/api/spe/')
        .then((response) => {
          store.dispatch(saveListOfSpe(response.data));
        })
        .catch((error) => {
          console.log('problème avec la requete fetch spe');
          console.error(error);
        });
      break;
    case FETCH_TECHNO:
      axios.get('/api/techno/')
        .then((response) => {
          store.dispatch(saveListOfSTechno(response.data));
        })
        .catch((error) => {
          console.log('problème avec la requete fetch techno');
          console.error(error);
        });
      break;
    case FETCH_CONTRACT:
      axios.get('/api/contract/')
        .then((response) => {
          store.dispatch(saveListOfContract(response.data));
        })
        .catch((error) => {
          console.log('problème avec la requete fetch techno');
          console.error(error);
        });
      break;
    case SUBSCRIBE:
    {
      axios.post('/api/profil/', {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        email: state.user.email,
        story: state.user.description,
        password: state.user.password,
        spe: state.user.orientation,
        contrats: state.user.contract,
        technos: state.user.technos,
        is_search_job: state.user.is_search_job,
      })
        .then((response) => {
          console.log('tu es bien inscrit !', response);
          store.dispatch(subscribeChangeStatus());
        })
        .catch((error) => {
          console.error('Il y a un soucis', error);
        });
      break;
    }
    case LOGOUT:
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('user_email');
      sessionStorage.removeItem('user_firstname');
      delete axios.defaults.headers.common.Authorization;
      window.location.reload();
      break;
  }
  next(action);
};

export default UserAjax;
