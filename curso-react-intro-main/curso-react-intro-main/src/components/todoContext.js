import React, { Children } from "react";
import { useLocalStorage } from "../useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,setItem
    } = useLocalStorage('TODOS_V1', []);
    
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  const addTodo = (text)=>{
    const newTodos = [...todos];
    newTodos.push({text:text , completed:false,id:newTodos.length+1});
    saveTodos(newTodos);
  }; 
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,setOpenModal,setItem,addTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };