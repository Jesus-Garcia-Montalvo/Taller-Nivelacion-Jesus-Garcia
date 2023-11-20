import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

import Nav from "../componentes/Nav/Nav";
import MiContador from "../componentes/MiContador/MiContador";
import MiComponente from "../componentes/MiComponente/MiComponente";
import MisProductos from "../componentes/MisProductos/MisProductos";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MiContador" element={<MiContador />} />
          <Route path="/MiComponente" element={<MiComponente />} />
          <Route path="/MisProductos" element={<MisProductos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
