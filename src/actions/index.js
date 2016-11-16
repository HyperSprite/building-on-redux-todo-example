// @flow

const getID = () => new Date().getTime();

export const TYPES: {[key: ActionStrings]: ActionStrings} = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  CHAT_INPUT: 'CHAT_INPUT',
};

// Action creators
export const addTodo: TodoIF = (text) => {
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

export const chatInput = (chat) => {
  return {
    type: TYPES.CHAT_INPUT,
    id: getID(),
    chat,
  };
};
