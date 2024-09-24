import React from 'react';

function Separador() {
  return (
    <div className="relative mx-auto my-16 w-4/5 max-w-2xl border-t border-gray-300">
      <div className="absolute left-1/2 -top-2 w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 border border-white rounded-full transform -translate-x-1/2 shadow-lg" />
    </div>
  );
}

export default Separador;
