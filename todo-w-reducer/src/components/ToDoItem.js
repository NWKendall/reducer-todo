import React from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";

const ToDoItem = ({ todo, dispatch }) => {

  const { item, completed, id } = todo
  const { dispatch } = dispatch

  return (
    <div style={{border: "1px solid black"}}>
      <p>{item}</p>
      <button onClick={""}>complete</button>
    </div>
  )
}

export default ToDoItem;