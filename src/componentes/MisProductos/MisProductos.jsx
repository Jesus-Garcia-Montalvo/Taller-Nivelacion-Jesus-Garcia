// src/components/MisProductos/MisProductos.js
import React, { useState, useEffect } from "react";

import "./MisProductos.css";
import { fetchCharacters } from "../../services/api";
import FiltroProductos from "../FiltroProductos/FiltroProductos";
import DetallesProducto from "../DetallesProducto/DetallesProducto";
import useFiltro from "../../Hooks/useFiltro";

function MisProductos() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCharacters();
        setCharacters(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const {
    filterEstado,
    filterOcupacion,
    handleEstadoChange,
    handleOcupacionChange,
  } = useFiltro();

  const handleVerDetalle = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  const renderProductos = () => {
    return (
      <div className="card-container">
        {filteredCharacters.map((character, index) => (
          <div key={index} className="card">
            <img src={character.Imagen} alt={character.Nombre} />
            <div>
              <strong>{character.Nombre}</strong>
            </div>
            <button onClick={() => handleVerDetalle(character)}>
              Ver Detalle
            </button>
          </div>
        ))}
      </div>
    );
  };

  const filteredCharacters = characters.filter((character) => {
    const estadoMatch =
      filterEstado === "todos" || character.Estado === filterEstado;
    const ocupacionMatch =
      filterOcupacion === "todos" || character.Ocupacion === filterOcupacion;
    return estadoMatch && ocupacionMatch;
  });

  return (
    <div>
      <h2>Mis Productos</h2>
      <FiltroProductos
        filterEstado={filterEstado}
        filterOcupacion={filterOcupacion}
        onEstadoChange={handleEstadoChange}
        onOcupacionChange={handleOcupacionChange}
      />
      {loading ? <p>Cargando...</p> : renderProductos()}

      {selectedCharacter && (
        <DetallesProducto
          selectedCharacter={selectedCharacter}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default MisProductos;
