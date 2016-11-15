// @flow

const getID = () => new Date().getTime();

export const TYPES: {[key: ActionStrings]: ActionStrings} = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
};

//
// // Other constants
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE',
// };

// Action creators
export const addTodo = (text) => {
  console.log('addTodo');
  return {
    type: TYPES.ADD_TODO,
    id: getID(),
    text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TYPES.TOGGLE_TODO,
    id,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: TYPES.SET_VISIBILITY_FILTER,
    filter,
  };
};
