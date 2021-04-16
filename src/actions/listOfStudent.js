export const CHANGE_FILTER_SORT_VALUE = 'CHANGE_FILTER_SORT_VALUE';

export const ChangeFilterSortValue = (radioName, value) => ({
  type: CHANGE_FILTER_SORT_VALUE,
  radioName,
  value,
});

export const CHANGE_FILTERED_DATA_VALUE = 'CHANGE_FILTERED_DATA_VALUE';
export const changeFilteredDataValue = () => ({
  type: CHANGE_FILTERED_DATA_VALUE,
});

export const SAVE_FILTERED_DATA_VALUE = 'SAVE_FILTERED_DATA_VALUE';
export const saveFilteredDataValue = (value) => ({
  type: SAVE_FILTERED_DATA_VALUE,
  value,
});
