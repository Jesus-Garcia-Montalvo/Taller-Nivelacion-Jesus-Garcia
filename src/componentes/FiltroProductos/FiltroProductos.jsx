import React from "react";

const FiltroProductos = ({
  filterEstado,
  filterOcupacion,
  onEstadoChange,
  onOcupacionChange,
}) => {
  return (
    <div>
      <label>
        Filtrar por Estado:
        <select value={filterEstado} onChange={onEstadoChange}>
          <option value="todos">Todos</option>
          <option value="Vivo">Vivo</option>
          <option value="Fallecido">Fallecido</option>
        </select>
      </label>
      <label>
        Filtrar por Ocupación:
        <select value={filterOcupacion} onChange={onOcupacionChange}>
          <option value="todos">Todos</option>
          <option value="Personalidad de televisión">
            Personalidad de televisión
          </option>
          <option value="Granjero, trabajador de la construcción">
            Granjero, trabajador de la construcción
          </option>
          <option value="Desempleado">Desempleado</option>
        </select>
      </label>
    </div>
  );
};

export default FiltroProductos;
