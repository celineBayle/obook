// obtenir la liste de tous les étudiant
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const fetchProject = () => ({
  type: FETCH_PROJECT,
});

// Obtenir les information d'un étudiant en particulier
export const FETCH_PROJECT_BY_ID = 'FETCH_PROJECT_BY_ID';
export const fetchProjectById = () => ({
  type: FETCH_PROJECT_BY_ID,
});

export const PUT_ID_OF_PROJECT_PAGE = 'PUT_ID_OF_PROJECT_PAGE';
export const putIdOfProjectPage = (idOfProjectPage) => ({
  type: PUT_ID_OF_PROJECT_PAGE,
  idOfProjectPage,
});

// permet de mettre les données des étudiants recu dans la liste
export const SAVE_PROJECT = 'SAVE_PROJECT';
export const saveProject = (project) => ({
  type: SAVE_PROJECT,
  project,
});

export const SAVE_PROJECT_WITH_ID = 'SAVE_PROJECT_WITH_ID';
export const saveProjectWithId = (project = {}) => ({
  type: SAVE_PROJECT_WITH_ID,
  project,
});

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const changeInpuValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const createProject = () => ({
  type: CREATE_PROJECT,
});

export const PROJECT_IS_CREATED = 'PROJECT_IS_CREATED';
export const projectIsCreated = () => ({
  type: PROJECT_IS_CREATED,
});

export const PROJECT_ERROR_ON_THE_CREATION = 'PROJECT_ERROR_ON_THE_CREATION';
export const projectErrorOnTheCreation = () => ({
  type: PROJECT_ERROR_ON_THE_CREATION,
});
