// @flow

import { TYPES } from '../actions';

type RedTodoActionIF = {
  type: string,
  paylaod: {
    id: number,
    text: string,
  } | {
    id: number,
    completed: boolean,
  },
};

type RedTodoReturnIF = {
  id: number,
  text: string,
  completed: boolean,
} | {
  completed: boolean,
}

const todo = (state = {}, action: RedTodoActionIF): RedTodoReturnIF => {
  switch (action.type) {

    case TYPES.ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };

    case TYPES.TOGGLE_TODO:
      if (state.id !== action.payload.id) {
        return state;
      }
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
