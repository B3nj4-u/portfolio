import React from 'react';

const Modal = ({ children, onClose }) => {
  // Función para detener la propagación del evento click y evitar que se cierre el modal
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={onClose}>
      <div 
        className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform scale-100 relative max-w-xl w-full" 
        onClick={stopPropagation}
      >
        <button className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200 transition duration-200" onClick={onClose}>
          &times;
        </button>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white text-center">Detalles</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
