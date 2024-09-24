import React from "react";

function PersonalInfo() {
  const personalInfo = {
    nombre: "Pedro Benjamín Ulloa Valenzuela",
    fechaNacimiento: "14/08/1999",
    direccion: "Parcelación Santa María, Senda Sur, Puerto Montt",
    email: "pedro.ulloavalenzuela@gmail.com",
    telefono: "+569 59283295",
    linkedIn:
      "https://www.linkedin.com/in/pedro-benjam%C3%ADn-ulloa-valenzuela-3a2098186/",
    github: "https://github.com/B3nj4-u",
  };

  return (
    <header className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 border-b">
      {/* Imagen y nombre en la parte superior */}
      <div className="flex items-center mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TeF7qH7IxB1quC4ZFvLp7CEe9cstqfC39A&s"
          alt="Imagen en construcción"
          className="w-40 h-40 rounded-full mr-4" // Estilo de la imagen circular
        />
        <h2 className="text-xxl font-semibold">{personalInfo.nombre}</h2>
      </div>

      <div className="mx-4 md:mx-16 max-w-2xl mx-auto">
        <h4 className="text-md text-gray-600 dark:text-gray-400 mb-4 text-center md:text-left p-4 border border-gray-300 rounded-md shadow-md">
          ¡Hola! Me titulé de la Universidad de Los Lagos como Ingeniero Civil
          Informático y Licenciado en Ciencias de la Ingeniería. Realicé las
          certificaciones profesionales de Google en Ciberseguridad, Análisis de
          Datos y Fundamentos de IA. Actualmente, estoy en el programa GET
          CERTIFIED de Google para Ingeniero de Datos Profesional en Google
          Cloud.
        </h4>
      </div>

    </header>
  );
}

export default PersonalInfo;
