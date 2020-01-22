import React, { useState } from "react";
import ToDoList from "./ToDoList";

const ToDoForm = ({ addToDo, clearToDo}) => {
  
  const [newToDo, setNewToDo] = useState("");
  const handleChanges = e => {
    e.preventDefault();
    setNewToDo(e.target.value)
  }

  return (    
    <div>
      <input 
        type="text"
        name="newtodo"
        placeholder="what do you have todo?"
        value={newToDo}
        onChange={handleChanges}
      />
      <button 
        onClick={() => addToDo(newToDo)}>Add</button>
      <button 
        onClick={clearToDo}
      >Clear Completed</button>
      </div>
    
  )
}

export default ToDoForm;