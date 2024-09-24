import React, { useState } from 'react';
import Gm from '/gm.png';
import { FaCopy } from 'react-icons/fa'; // Importa el ícono de copiar de react-icons

function CorreoBoton({ correo }) {
  const [mostrarCorreo, setMostrarCorreo] = useState(false);

  const handleClick = () => {
    setMostrarCorreo(!mostrarCorreo);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(correo);
    alert("Correo copiado al portapapeles!");
  };

  return (
    <div className="relative mb-8">
      <img
        src={Gm}
        alt="Logo de Gmail"
        className={`w-20 h-14 transition-shadow duration-300 cursor-pointer rounded-lg border-2 border-gray-300 bg-white shadow-md hover:shadow-lg hover:bg-gray-100 ${mostrarCorreo ? 'shadow-lg' : ''}`}
        onClick={handleClick}
      />
      {mostrarCorreo && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white rounded-lg shadow-md p-4 z-10">
          <div className="flex justify-between items-start">
            <p className="text-lg text-gray-800 text-center font-semibold">{correo}</p>
            <button
              onClick={handleCopy}
              className="text-gray-300 hover:text-blue-500 transition duration-200"
              title="Copiar correo"
            >
              <FaCopy className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CorreoBoton;
