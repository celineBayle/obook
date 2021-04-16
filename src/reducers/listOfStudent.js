import { CHANGE_FILTER_SORT_VALUE, SAVE_FILTERED_DATA_VALUE } from 'src/actions/listOfStudent';

export const initialState = {
  orientation: 'allOrientation',
  disponibility: 'allDisponibility',
  filterSortOrientationOption: [{ id: 'allOrientation', value: 'allOrientation', name: 'Tous les étudiants' }, { id: 'back', value: 'Back-end', name: 'Back-end' }, { id: 'front', value: 'Front-end', name: 'Front-end' }, { id: 'fullstack', value: 'Fullstack', name: 'FullStack' }],
  filterSortDisponibilityOption: [{ id: 'allDisponibility', value: 'allDisponibility', name: 'Tous' }, { id: 'close', value: 'false', name: 'Indisponible' }, { id: 'open', value: 'true', name: 'En recherche d\'emploi ' }],
  filteredata: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FILTER_SORT_VALUE:
      return {
        ...state,
        [action.radioName]: action.value,
      };
    case SAVE_FILTERED_DATA_VALUE:
      return {
        ...state,
        filteredata: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
