import React, { useState } from "react";

function Desplegable({ titulo, descripcion }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const handleClick = () => {
    setMostrarDescripcion(!mostrarDescripcion); // Alterna la visualización de la descripción
  };

  return (
    <div className="mb-4 flex flex-col items-center"> {/* Mantiene el contenido centrado */}
      <button
        onClick={handleClick} // Alterna la visualización de la descripción al hacer clic
        className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 shadow-md transition-all duration-300 hover:bg-gradient-to-l"
      >
        <p className="font-semibold text-white">{titulo}</p> {/* Asegura que el texto sea blanco */}
      </button>
      {mostrarDescripcion && (
        <div className="mt-2 p-4 rounded-lg bg-purple-100 shadow-md w-full max-w-lg text-center"> {/* Ancho máximo aumentado */}
          <p className="text-gray-700">{descripcion}</p>
        </div>
      )}
    </div>
  );
}

export default Desplegable;
