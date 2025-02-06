


import React from "react";
import { TodoContext } from "./todoContext";
function TodoSearch(){
    
    const {searchValue,setSearchValue} = React.useContext(TodoContext);
    return(
   <input className="TodoSearch" placeholder="Buscador de Todos"
   value={searchValue}
   onChange={(event)=>{
   setSearchValue(event.target.value);
   }}/>

    );
    }

export {TodoSearch};