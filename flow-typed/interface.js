// @flow
// these are Action Creator Strings, see actions/index.js file
export type ActionStrings = (
  'ADD_TODO' |
  'TOGGLE_TODO' |
  'SET_VISIBILITY_FILTER'
)

export type ListIF = {
  active: boolean,
  children: Array<objects>,
  onClick: any,
}

export type ReduxActionIF ={
  type: string;
  payload: any;
}
