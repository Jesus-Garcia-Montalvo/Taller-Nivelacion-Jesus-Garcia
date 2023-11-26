// TaskInput.js
import React, { useState } from "react";
import { useToDo } from "../../Context/ToDoContext";

const TaskInput = () => {
  const { addTask } = useToDo();
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese la nueva tarea"
        value={taskText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
    </div>
  );
};

export default TaskInput;
