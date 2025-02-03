import { useState } from "react";
import { AiOutlineRocket } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
function TodoItem(props) {
  const [hoverListo, setHoverL] = useState(false);
  const [hoverBorrar, setHoverB] = useState(false);

  return (
    <li className="TodoItem">
      <AiOutlineRocket 
        className={`Icon Icon-check ${props.completed ? "Icon-check--active" : ""}`} 
        onClick={props.onComplete}
        onMouseEnter={() => setHoverL(true)}
        onMouseLeave={() => setHoverL(false)}
        style={{ color: hoverListo ? "green" : props.completed ? "green" : "black", transition: "color 0.3s ease-in-out" }}
      />

      <p className={`TodoItem-p ${props.completed ? "TodoItem-p--complete" : ""}`}>
        {props.text}
      </p>


      <AiFillDelete className="Icon Icon-delete" 
       onMouseEnter={() => setHoverB(true)}
       onMouseLeave={() => setHoverB(false)}
      onClick={props.onDelete} 
      style={{ color: hoverBorrar ? "red" :"black", transition: "color 0.3s ease-in-out" }}/>
    
    </li>
  );
}

export { TodoItem };
