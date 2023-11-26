// context.js
import React, { createContext, useContext, useReducer } from "react";

const ToDoContext = createContext();

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};

const ToDoProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(todoReducer, []);

  const addTask = (text) => {
    dispatch({ type: ADD_TASK, payload: text });
  };

  const removeTask = (id) => {
    dispatch({ type: REMOVE_TASK, payload: id });
  };

  const toggleTask = (id) => {
    dispatch({ type: TOGGLE_TASK, payload: id });
  };

  return (
    <ToDoContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
      {children}
    </ToDoContext.Provider>
  );
};

const useToDo = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("useToDo debe ser utilizado dentro de un ToDoProvider");
  }
  return context;
};

export { ToDoProvider, useToDo };
