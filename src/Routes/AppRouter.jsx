// Router.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

import Nav from "../componentes/Nav/Nav";
import MiContador from "../componentes/MiContador/MiContador";
import MiComponente from "../componentes/MiComponente/MiComponente";
import MisProductos from "../componentes/MisProductos/MisProductos";
import MiContadorConUseReducer from "../componentes/MiContadorConUseReducer/MiContadorConUseReducer";

import Home from "../componentes/Home/Home";
import MiToDoList from "../componentes/miTodoList/MiToDoList";

const ProtectedRoute = ({ user, redirectTo = "/Home", children }) => {
  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

function AppRouter() {
  const [user, setUser] = useState(null);
  const [showUserName, setShowUserName] = useState(false);

  const login = () => {
    // Realiza las peticiones necesarias y establece el usuario si es exitoso.
    setUser({
      id: 1,
      name: "jesus",
    });
    setShowUserName(true);
  };

  const logout = () => {
    setUser(null);
    setShowUserName(false);
  };

  return (
    <Router>
      <Nav />
      {user ? (
        <div>
          <button onClick={logout}>Logout</button>
          {showUserName && <p>Bienvenido, {user.name}.</p>}
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="/MiToDoList" element={<MiToDoList />} />
          <Route path="/MiComponente" element={<MiComponente />} />
          <Route path="/MiContador" element={<MiContador />} />
          <Route path="/MisProductos" element={<MisProductos />} />
          <Route
            path="/miContadorUseReducer"
            element={<MiContadorConUseReducer />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
