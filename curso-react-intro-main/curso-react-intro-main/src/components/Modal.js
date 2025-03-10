import React from "react";
import ReactDOM from 'react-dom'
import { TodoContext } from "./todoContext";


function Modal({children}){
 return ReactDOM.createPortal(

    <div className="ModalBackground" > 

    {children}</div>,
    document.getElementById('Modal')
 );
}


export {Modal};