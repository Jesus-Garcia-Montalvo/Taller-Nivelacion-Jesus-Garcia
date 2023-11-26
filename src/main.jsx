import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routes/AppRouter";
import { ToDoProvider } from "./Context/ToDoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToDoProvider>
    <AppRouter />
  </ToDoProvider>
);
