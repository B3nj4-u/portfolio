import { useState } from 'react';
import './App.css';

function App() {
  // Puedes agregar más estados si necesitas manejar más interacciones

  return (
    <div className="App">
      <header className="App-header">
        {/* Agrega tu logo o nombre */}
        <h1>Pedro B. Ulloa Valenzuela</h1>
      </header>
      <main>
        {/* Sección de Biografía */}
        <section id="biografia">
          <h2>Biografía</h2>
          <p>
            Ingeniero Civil Informático recién graduado de la Universidad de Los Lagos...
            {/* Continúa con tu biografía */}
          </p>
        </section>
        
        {/* Sección de Proyectos */}
        <section id="proyectos">
          <h2>Proyectos</h2>
          {/* Lista tus proyectos aquí */}
        </section>
        
        {/* Sección de Habilidades */}
        <section id="habilidades">
          <h2>Habilidades</h2>
          {/* Enumera tus habilidades técnicas y blandas aquí */}
        </section>
        
        {/* Sección de Contacto */}
        <section id="contacto">
          <h2>Contacto</h2>
          {/* Información de contacto y formulario si lo deseas */}
        </section>
      </main>
      <footer>
        {/* Información del pie de página, como derechos de autor y enlaces a redes sociales */}
        <p>© 2024 Pedro B. Ulloa Valenzuela</p>
      </footer>
    </div>
  );
}

export default App;
