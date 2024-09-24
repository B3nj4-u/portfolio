import React from 'react';

function RedesSociales({ nombre, url, logo }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="inline-block w-16 h-16">
      <img 
        src={logo} 
        alt={nombre} 
        title={nombre} 
        className="w-full h-full border-2 border-gray-300 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
      />
    </a>
  );
}

export default RedesSociales;
