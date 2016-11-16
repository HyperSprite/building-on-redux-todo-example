import React from 'react';
import Footer from './footer';
import AddTodo from '../containers/add-todos';
import VisibleTodoList from '../containers/visible-todo-list';
import ChatListItems from '../containers/chat-list-items';
import ChatInput from '../containers/chat-input';

const App = () => (
  <div>
    <div>
      <Footer />
      <AddTodo />
      <VisibleTodoList />
    </div>
    <div>
      <ChatListItems />
      <ChatInput />
    </div>
  </div>
);

export default App;
