// TaskList.js
import React from "react";
import Task from "../task/Task";
import { useToDo } from "../../Context/ToDoContext";

const TaskList = () => {
  const { tasks } = useToDo();

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
