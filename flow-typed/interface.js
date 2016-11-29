// @flow
// these are Action Creator Strings, see actions/index.js file
export type ActionStrings = (
  'ADD_TODO' |
  'TOGGLE_TODO' |
  'SET_VISIBILITY_FILTER' |
  'CHAT_INPUT' |
  'CHAT_OUTPUT'
)

export type ComponentTodoIF = {
  type: string,
  id: func | number,
  onClick: Function,
  completed: boolean,
  text: string,
}

export type ComponentListIF = {
  todos: Array<ComponentTodoIF>,
  onTodoClick: Function,
}

export type TodoIF = {
  id: func | number,
  completed: boolean,
  text: string,
}

export type AddTodoIF = {
  id: func | number,
  text: string,
}

export type ActionAddTodoIF = {
  type: string,
  payload: AddTodoIF,
}

export type ToggleTodoIF = {
  id: number,
}

export type ActionToggleTodoIF = {
  type: string,
  payload: ToggleTodoIF,
}

export type VisibilityFilterIF = {
  filter: string,
}

export type ActionVisibilityFilterIF = {
  type: string,
  payload: VisibilityFilterIF,
}

export type ReducerActionTodoIF = {
  type: string,
  payload: AddTodoIF | ToggleTodoIF | VisibilityFilterIF,
}

export type ReducerTodoIF = ActionAddTodoIF | AddTodoIF | ToggleTodoIF | VisibilityFilterIF;

// export type ReducerTodoIF = {
//   type: string,
//   payload: TYPES.AddTodoIF | TYPES.ToggleTodoIF | TYPES.VisibilityFilterIF,
// }

export type ReducerTodosIF = {
  type: string,
  payload: TodoIF | ToggleTodoIF,
}

// export type ReducerTodosIF = ActionAddTodoIF | ActionToggleTodoIF;

export type ReducerTodoItemsStateIF = Array<TodoIF>;

// Chat interface
export type ChatInputIF = {
  type: string,
  id: func | string,
  chat: string,
  time: number,
  user: string,
  room: string,
}

export type ChatOutputIF = {
  type: string,
  payload: {
    id: func | string,
    chat: string,
    time: number,
    user: string,
    room: string,
  },
}

export type ActionChatInputIF = {
  type: TYPES.CHAT_INPUT,
  payload: ChatOutputIF,
}

export type ReducerChatInputIF = ChatInputIF | Object

export type ReducerChatItemsStateIF = Array<ChatInputIF>

export type ReduxActionIF ={
  type: string;
  payload: any;
}
