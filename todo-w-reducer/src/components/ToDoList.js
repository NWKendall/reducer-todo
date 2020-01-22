import React, { useReducer, useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { todoReducer, initialState } from "../reducers/todoReducer";

const ToDoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addToDo = newToDo => {  
    return dispatch({ 
      type: "ADD_TODO", 
      payload: newToDo
    })
  }

  const toggleTodo = id => {
    
    return dispatch({ 
      type: "TOGGLE_TODO", 
      payload: id
    })
  }

  const clearToDo = () => {
    dispatch({ 
      type: "CLEAR_TODO", 
    })
  }
  console.log(state)

  return (
    <div>
      <h2>TodoList</h2>
      <ToDoForm 
        addToDo={addToDo}
        clearToDo={clearToDo}
      />
        {state.map(todo => (
          <ToDoItem 
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))}
    </div>
  )
}
export default ToDoList;