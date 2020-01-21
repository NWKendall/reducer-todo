import React from "react";

const ToDoItem = ({ todo }) => {

  const { item, completed, id } = todo

  return (
    <div style={{border: "1px solid black"}}>
      <p>{item}</p>
      <button>complete</button>
    </div>
  )
}

export default ToDoItem;