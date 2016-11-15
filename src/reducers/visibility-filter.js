// @flow
import { TYPES } from '../actions';

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case TYPES.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
export default visibilityFilter;
