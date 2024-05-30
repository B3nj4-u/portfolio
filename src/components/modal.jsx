import React from 'react';
import './modal.css'; // Asegúrate de tener este archivo CSS para los estilos

const Modal = ({ children, onClose }) => {
  // Función para detener la propagación del evento click y evitar que se cierre el modal
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={stopPropagation}>
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
