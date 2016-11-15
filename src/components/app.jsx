import React from 'react';
import Footer from './footer';
import AddTodo from '../containers/add-todos';
import VisibleTodoList from '../containers/visible-todo-list';

const App = () => (
  <div>
    <Footer />
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
