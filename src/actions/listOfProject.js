export const CHANGE_FILTER_SORT_VALUE = 'CHANGE_FILTER_SORT_VALUE';

export const ChangeFilterSortValue = (value) => ({
  type: CHANGE_FILTER_SORT_VALUE,
  value,
});

export const SAVE_FILTERED_PROJECT_DATA = 'SAVE_FILTERED_PROJECT_DATA';
export const saveFilteredProjectData = (value) => ({
  type: SAVE_FILTERED_PROJECT_DATA,
  value,
});

export const FETCH_FILTERED_PROJECT = 'FETCH_FILTERED_PROJECT';
export const fetchFilteredProject = () => ({
  type: FETCH_FILTERED_PROJECT,
});
