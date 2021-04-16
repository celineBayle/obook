// obtenir la liste de tous les étudiant
export const FETCH_STUDENT = 'FETCH_STUDENT';
export const fetchStudent = () => ({
  type: FETCH_STUDENT,
});

// Obtenir les information d'un étudiant en particulier
export const FETCH_STUDENT_BY_ID = 'FETCH_STUDENT_BY_ID';
export const fetchStudentById = () => ({
  type: FETCH_STUDENT_BY_ID,
});

export const PUT_ID_OF_STUDENT_PAGE = 'PUT_ID_OF_STUDENT_PAGE';
export const putIdOfStudentPage = (idOfStudentPage) => ({
  type: PUT_ID_OF_STUDENT_PAGE,
  idOfStudentPage,
});

// permet de mettre les données des étudiants recu dans la liste
export const SAVE_STUDENT = 'SAVE_STUDENT';
export const saveStudent = (student) => ({
  type: SAVE_STUDENT,
  student,
});
export const SAVE_STUDENT_WITH_ID = 'SAVE_STUDENT_WITH_ID';
export const saveStudentWithId = (student) => ({
  type: SAVE_STUDENT_WITH_ID,
  student,
});
