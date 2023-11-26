// MiToDoList.js
import React from "react";
import TaskList from "../taskList/TaskList";
import AddTask from "../addTask/AddTask";

const MiToDoList = () => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default MiToDoList;
