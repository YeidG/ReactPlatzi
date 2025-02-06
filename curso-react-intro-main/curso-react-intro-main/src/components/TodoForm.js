import React from "react";
import { TodoContext } from "./todoContext";

function TodoForm(){

    const {setOpenModal,addTodo} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
  
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const cancel = (event)=>setOpenModal((value)=>!value);
    const change =  (event)=>{setNewTodoValue(event.target.value)};
    
    return (
        <form className="formulario" onSubmit={onSubmit}>
            <div className="tituloModal">
            <label >Nuevo Todo</label>
            </div>
            <div>
            <textarea placeholder="Escribe tu nuevo Todo"
            onChange={change}
            value={newTodoValue}
            ></textarea> 
            </div>
            
            <div className="contenedorboton">
            <button className="buttonM bttCancelar" onClick={cancel}>Cancelar</button>
                
            <button  type="submit" className="buttonM bttAñadir" >Agregar</button> </div>
        </form>

    )
}
export {TodoForm};