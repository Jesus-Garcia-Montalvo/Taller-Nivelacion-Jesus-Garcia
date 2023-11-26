// Task.js
import React from "react";
import { useToDo } from "../../Context/ToDoContext";

const Task = ({ task }) => {
  const { toggleTask, removeTask } = useToDo();

  return (
    <li
      key={task.id}
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      {task.text}{" "}
      <button onClick={() => toggleTask(task.id)}>Completada</button>
      <button onClick={() => removeTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default Task;
