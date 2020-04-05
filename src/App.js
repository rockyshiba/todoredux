import React from 'react';
import './App.css';
import VisibileTodoList from './containers/VisibileTodoList';
import AddTodo from "./containers/AddTodo";

const App = () => (
  <div>
    <AddTodo />
    <VisibileTodoList />
  </div>
);

export default App;
