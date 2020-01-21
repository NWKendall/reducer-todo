import React, { useState, useReducer } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";


const ToDoApp = () => {
  return (
    <div>
      <ToDoForm />
      <ToDoList />    
    </div>
  )
}

export default ToDoApp;