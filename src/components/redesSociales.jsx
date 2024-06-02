import React from 'react';
import './redesSociales.css';

function RedesSociales({ nombre, url, logo }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="red-social">
      <img src={logo} alt={nombre} title={nombre} />
    </a>
  );
}

export default RedesSociales;