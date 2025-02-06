import React from "react";
import { TodoContext } from "./todoContext";



function TodoCounter(){
 const {completedTodos,totalTodos} = React.useContext(TodoContext);
    return(
      <h1 className="titulo">
        Terminaste  {completedTodos} de  {totalTodos} TODOs
      </h1>
    );
  }
  export {TodoCounter};