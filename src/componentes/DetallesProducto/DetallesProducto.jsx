import React from "react";
import "./DetallesProducto.css";

const DetallesProducto = ({ selectedCharacter, onCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onCloseModal}>
          &times;
        </span>
        <img src={selectedCharacter.Imagen} alt={selectedCharacter.Nombre} />
        <p>Nombre: {selectedCharacter.Nombre}</p>
        <p>Historia: {selectedCharacter.Historia}</p>
        <p>Estado: {selectedCharacter.Estado}</p>
        <p>Género: {selectedCharacter.Genero}</p>
        <p>Ocupación: {selectedCharacter.Ocupacion}</p>
      </div>
    </div>
  );
};

export default DetallesProducto;
