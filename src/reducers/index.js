import { combineReducers } from 'redux';
import chatitems from './chat';
import todos from './todos';
import visibilityFilter from './visibility-filter';

const todoApp = combineReducers({
  chatitems,
  todos,
  visibilityFilter,
});

export default todoApp;
