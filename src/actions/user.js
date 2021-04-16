/// ////////////
/// // CONNEXION /////
/// ////////////
//
// permet de se connecter
//
export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});
//
// sauvegarde de l'utilisateur après la requete fetch login
//
export const SAVE_USER = 'SAVE_USER';
export const saveUser = (pseudo, token) => ({
  type: SAVE_USER,
  pseudo,
  token,
});
//
// Vérifie si un utilisateur est enregistré en session ou non
//
export const IS_CONNECTED_IN_SESSION_OR_NOT = 'IS_CONNECTED_IN_SESSION_OR_NOT';
export const isConnectedInSessionOrNot = () => {
  const data = sessionStorage.getItem('token');
  if (data) {
    return ({
      type: IS_CONNECTED_IN_SESSION_OR_NOT,
      logged: true,
    });
  }
  return ({
    type: IS_CONNECTED_IN_SESSION_OR_NOT,
    logged: false,
  });
};

/// ////////////
/// // DECONNEXION /////
/// ////////////
//
// Permet de se déconnecter en oubliant le token
//
export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

/// ////////////
/// // INSCRIPTION /////
/// ////////////
//
// lance la requete post d'inscription
//
export const SUBSCRIBE = 'SUBSCRIBE';
export const subscribe = () => ({
  type: SUBSCRIBE,
});

export const SUBSCRIBE_CHANGE_STATUS = 'SUBSCRIBE_CHANGE_STATUS';
export const subscribeChangeStatus = () => ({
  type: SUBSCRIBE_CHANGE_STATUS,
});

/// ////////////
/// // CONTROL /////
/// ////////////
//
// change la valeur des inputs
//
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (newValue, name) => ({
  type: CHANGE_VALUE,
  newValue,
  name,
});
//
// CHanmps de valeur des champs a valeur multiple
//
export const CHANGE_MULTICHOICE_VALUE = 'CHANGE_MULTICHOICE_VALUE';
export const changeMultichoiceValue = (newValue, name) => ({
  type: CHANGE_MULTICHOICE_VALUE,
  newValue,
  name,
});

export const CHANGE_ONE_CHOICE_VALUE = 'CHANGE_ONE_CHOICE_VALUE';
export const changeOneChoiceValue = (value, name) => ({
  type: CHANGE_ONE_CHOICE_VALUE,
  value,
  name,
});

/// ////////////
/// // SPE /////
/// ////////////
//
// requete get pour obtenir les spes
//
export const FETCH_SPE = 'FETCH_SPE';
export const fetchSpe = (value) => ({
  type: FETCH_SPE,
  value,
});
//
// telechagement de la liste des spes
//
export const SAVE_LIST_OF_SPE = 'SAVE_LIST_OF_SPE';
export const saveListOfSpe = (value) => ({
  type: SAVE_LIST_OF_SPE,
  value,
});

export const CHANGE_SPE_VALUE = 'CHANGE_SPE_VALUE';
export const changeSpeValue = (value) => ({
  type: CHANGE_SPE_VALUE,
  value,
});

/// ////////////
/// // TECHNO /////
/// ////////////
//
// requete get pour obtenir les spes
//
export const FETCH_TECHNO = 'FETCH_TECHNO';
export const fetchTechno = (value) => ({
  type: FETCH_TECHNO,
  value,
});
//
// telechagement de la liste des spes
//
export const SAVE_LIST_OF_TECHNO = 'SAVE_LIST_OF_TECHNO';
export const saveListOfSTechno = (value) => ({
  type: SAVE_LIST_OF_TECHNO,
  value,
});
//
//
//

/// ////////////
/// // Contract /////
/// ////////////
//
// requete get pour obtenir les spes
//
export const FETCH_CONTRACT = 'FETCH_CONTRACT';
export const fetchContract = (value) => ({
  type: FETCH_CONTRACT,
  value,
});
//
// telechagement de la liste des spes
//
export const SAVE_LIST_OF_CONTRACT = 'SAVE_LIST_OF_CONTRACT';
export const saveListOfContract = (value) => ({
  type: SAVE_LIST_OF_CONTRACT,
  value,
});
//
//
//

/// ////////////
/// // IMAGE /////
/// ////////////
//
// Upload de limage
//
export const PUT_PICTURE = 'PUT_PICTURE';
export const putPicture = (value) => ({
  type: PUT_PICTURE,
  value,
});

export const SEND_PICTURE = 'SEND_PICTURE';
export const sendPicture = (id) => ({
  type: SEND_PICTURE,
  id,
});

/// ////////////
/// // ERROR /////
/// ////////////
//
// Gestion des erreurs
//
export const ERROR_ON_SUBMIT_LOGIN = 'ERROR_ON_SUBMIT_LOGIN';
export const ErrorOnSubmitLogin = () => ({
  type: ERROR_ON_SUBMIT_LOGIN,
});
