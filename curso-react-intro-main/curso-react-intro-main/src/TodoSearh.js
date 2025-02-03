


import React, { useState }  from "react";
function TodoSearch(props){
    

    return(
   <input className="TodoSearch" placeholder="Buscador de Todos"
   value={props.searchValue}
   onChange={(event)=>{
    props.setSearchValue(event.target.value);
   }}/>

    );
    }

export {TodoSearch};