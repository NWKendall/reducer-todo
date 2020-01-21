import React, { useReducer } from "react";
import ToDoItem from "./ToDoItem";
import { todoReducer, initialState } from "../reducers/todoReducer";

const ToDoList = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div>
      <h2>TodoList</h2>
      {todoState.map(todo => {
        <ToDoItem 
          key={todo.id}
          todo={todo}
        />

      })}
    </div>
  )
}
export default ToDoList;