import { useState } from "react";

const useFiltro = (initialEstado = "todos", initialOcupacion = "todos") => {
  const [filterEstado, setFilterEstado] = useState(initialEstado);
  const [filterOcupacion, setFilterOcupacion] = useState(initialOcupacion);

  const handleEstadoChange = (event) => {
    setFilterEstado(event.target.value);
  };

  const handleOcupacionChange = (event) => {
    setFilterOcupacion(event.target.value);
  };

  return {
    filterEstado,
    filterOcupacion,
    handleEstadoChange,
    handleOcupacionChange,
  };
};

export default useFiltro;
