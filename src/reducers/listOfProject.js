import { CHANGE_FILTER_SORT_VALUE, SAVE_FILTERED_PROJECT_DATA } from 'src/actions/listOfProject';

export const initialState = {
  loading: true,
  filtered: 'false',
  filteredProjects: [],
  options: [{ id: 1, value: 'false', name: 'Tous les projets' }, { id: 3, value: 'true', name: 'Apothéose' }],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FILTER_SORT_VALUE:
      return {
        ...state,
        filtered: action.value,
      };
    case SAVE_FILTERED_PROJECT_DATA:
      return {
        ...state,
        filteredProjects: action.value,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
