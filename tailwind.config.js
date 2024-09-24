/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Para leer todos los archivos en src
    './public/index.html', // Para leer el archivo HTML
    // Agrega más rutas si tienes otros archivos donde usar Tailwind
  ],
  darkMode: 'class', // Opcional: habilitar el modo oscuro
  theme: {
    extend: {},
  },
  plugins: [],
};
