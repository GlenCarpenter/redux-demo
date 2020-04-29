import React from "react";
import "./App.css";
import { ToDoList } from "../ToDoList/";
import { AddToDo } from "../AddToDo/";

function App() {
  return (
    <div>
      <div className="App">
        <h1>ToDo List with React-Redux</h1>
        <AddToDo />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
