import React from "react";
import { TodoContext } from "./todoContext";


function CreatedTodoButton(){
    const {setOpenModal} = React.useContext(TodoContext);
    return(
   <button className="CreateButton" onClick={(event)=>setOpenModal((value)=>!value)}>
   +
   </button>

    );
    }



export {CreatedTodoButton};