// @flow

const getID = () => new Date().getTime();

// If any of these have a flow error about
// being incompatable with a string enum
// check the ActionStrings in the interface file.
export const TYPES: {[key: ActionStrings]: ActionStrings} = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  CHAT_INPUT: 'CHAT_INPUT',
  CHAT_OUTPUT: 'CHAT_OUTPUT',
};

// Action creators
export const addTodo = (text: string) => {
  return {
    type: TYPES.ADD_TODO,
    payload: {
      id: getID(),
      text,
    },
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: TYPES.TOGGLE_TODO,
    payload: {
      id,
    },
  };
};

export const setVisibilityFilter = (filter: string) => {
  return {
    type: TYPES.SET_VISIBILITY_FILTER,
    payload: {
      filter,
    },
  };
};

export const chatInput = (chat: string, room: string, user: string) => {
  return {
    type: TYPES.CHAT_INPUT,
    payload: {
      id: getID(),
      chat,
      room,
      user,
    },
  };
};
