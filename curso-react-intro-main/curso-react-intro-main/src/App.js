import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearh';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreatedTodoButton } from './CreatedTodoButton';
import React, { useState } from 'react';


const defaults= [

{text:'Ir a trabajar',completed:true,id:1},
{text:'Sacar al perro',completed:false,id:2},
{text:'Dar comida Gato',completed:false,id:3},
{text:'Pagar Facturas',completed:true,id:4}
]
function App() {
  const [todos,setTodos]=React.useState(defaults);
  const [searchValue,setSearchValue]= React.useState('');
  const completed= todos.filter(todos=> !!todos.completed).length;
  const searchFilter = todos.filter((todos)=>
  {return todos.text.toLowerCase().includes(searchValue.toLowerCase())});
  const total = todos.length;

  

  const isCompleted = (id) => {
    const newTodos =[...todos];
    const todoIndex =newTodos.findIndex(
      (x) => x.id === id
    );
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos =[...todos];
    const todoIndex =newTodos.findIndex(
      (x) => x.id === id
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };


  return (
    <React.Fragment>
    <TodoCounter completed={completed} total={total}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {searchFilter.map(todo=>(
          <TodoItem key={todo.id} 
          text={todo.text} 
          completed={todo.completed}
        
          onComplete={() => isCompleted(todo.id)}
          onDelete={()=> deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
    <CreatedTodoButton ></CreatedTodoButton>
    </React.Fragment>
    
      
    
 
  );


}
export default App;
