import React, { useState } from "react";
import "./desplegable.css";

function Desplegable({ titulo, descripcion }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const handleClick = () => {
    setMostrarDescripcion(!mostrarDescripcion);
  };

  return (
    <div className={`desplegable ${mostrarDescripcion ? "" : "invisible"}`}>
      <button onClick={handleClick}>{titulo}</button>
      {mostrarDescripcion && <div className="descripcion">{descripcion}</div>}
    </div>
  );
}

export default Desplegable;
