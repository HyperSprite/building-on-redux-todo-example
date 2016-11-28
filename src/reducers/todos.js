// @flow

import { TYPES } from '../actions';

const todo = (state: ReducerTodoIF = {}, action) => {
  switch (action.type) {

    case TYPES.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };

    case TYPES.TOGGLE_TODO:
      if (state.id !== action.id) {
        // console.log(state.id, '!==', action.id);
        return state;
      }
      // console.log(state.id, '===', action.id);
      return {
        ...state,
        ...{
          completed: !state.completed,
        },
      };

    default:
      return state;
  }
};

const todos = (state: ReducerTodoItemsStateIF = [], action) => {
  switch (action.type) {

    case TYPES.ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];

    case TYPES.TOGGLE_TODO:
      return state.map((t) => {
        return todo(t, action);
      });

    default:
      return state;
  }
};

export default todos;
