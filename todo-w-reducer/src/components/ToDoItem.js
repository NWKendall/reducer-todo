import React from "react";

const ToDoItem = ({ todo, toggleTodo }) => {
  console.log(toggleTodo)
  const { item, completed, id } = todo
  

  return (
    <div style={{border: "1px solid black"}}>
      <p>{item}</p>
      <button onClick={() => toggleTodo(id)}>Complete</button>
    </div>
  )
}

export default ToDoItem;