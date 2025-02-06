

import {TodoCounter} from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearh';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreatedTodoButton } from './components/CreatedTodoButton';

import React from 'react';
import { TodoContext } from './components/todoContext';

import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import { TodosLoading } from './components/TodosLoading';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,setOpenModal
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
    <TodoCounter/>
      <TodoSearch />

          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
                
              </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
      
       <CreatedTodoButton />
          {openModal && <Modal><TodoForm></TodoForm>  </Modal>}
       
    </React.Fragment>
  );
}

export default AppUI;