import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearh';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreatedTodoButton } from './CreatedTodoButton';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <TodoCounter completed={17} total={29}/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
    <CreatedTodoButton></CreatedTodoButton>
    </React.Fragment>
    
      
    
 
  );
}
export default App;
