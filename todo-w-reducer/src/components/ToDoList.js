import React, { useReducer } from "react";
import ToDoItem from "./ToDoItem";
import { todoReducer, initialState } from "../reducers/todoReducer";

const ToDoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div>
      <h2>TodoList</h2>
        {state.map(todo => (
          <ToDoItem 
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
          />
        ))}
    </div>
  )
}
export default ToDoList;