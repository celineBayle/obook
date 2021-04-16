/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchStudentById = (id) => {
  axios.get(`/api/project/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};
