// MiContadorConUseReducer.js
import React, { useReducer } from "react";

// Definir las acciones para aumentar y disminuir el contador
const INCREMENTAR = "INCREMENTAR";
const DECREMENTAR = "DECREMENTAR";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENTAR:
      return { contador: state.contador + 1 };
    case DECREMENTAR:
      return { contador: state.contador - 1 };
    default:
      return state;
  }
};

const MiContadorConUseReducer = () => {
  // Inicializar el estado usando useReducer
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  // Crear funciones de acción para aumentar y disminuir el contador
  const incrementar = () => {
    dispatch({ type: INCREMENTAR });
  };

  const decrementar = () => {
    dispatch({ type: DECREMENTAR });
  };

  return (
    <div>
      <p>Contador: {state.contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default MiContadorConUseReducer;
