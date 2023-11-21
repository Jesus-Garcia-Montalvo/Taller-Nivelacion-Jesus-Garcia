// Nav.js
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/micomponente">Mi Componente</Link>
        </li>
        <li>
          <Link to="/micontador">Mi Contador</Link>
        </li>
        <li>
          <Link to="/misproductos">Mis Productos</Link>
        </li>
        <li>
          <Link to="/miContadorUseReducer">MiContadorConUseReducer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
