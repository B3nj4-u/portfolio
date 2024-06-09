import React, { useState } from 'react';
import './correoBoton.css';
import Gm from '../public/gm.png';

function CorreoBoton({ correo }) {
  const [mostrarCorreo, setMostrarCorreo] = useState(false);

  const handleClick = () => {
    setMostrarCorreo(!mostrarCorreo);
  };

  return (
    <div className="correo-boton" >
      <img
        src={Gm}
        alt="Logo de Gmail"
        className={mostrarCorreo ? 'logo-con-brillo' : ''}
        onClick={handleClick}
      />
      {mostrarCorreo && <div className="correo">{correo}</div>}
    </div>
  );
}

export default CorreoBoton;