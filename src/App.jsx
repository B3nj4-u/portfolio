import React from "react";
import Modal from "./components/modal";
import Jobs from "./components/jobs";
import ProjectsDisplay from "./components/projectsDisplay";
import PersonalInfo from "./components/personalInfo";
import AboutMe from "./components/aboutMe";
import Contactame from "./components/contactame";
import Separador from "./components/separador";
import RedesSociales from "./components/redesSociales"; // Asegúrate de que la ruta sea correcta
import CorreoBoton from "./components/correoBoton"; // Asegúrate de que la ruta sea correcta
import Gm from "/gm.png"; // Cambia esto por la ruta de tu imagen de Gmail
import In from "/in.png"; // Cambia esto por la ruta de tu logo de LinkedIn
import Gh from "/gh.png"; // Cambia esto por la ruta de tu logo de GitHub
import "./App.css";

const personalInfo = {
  linkedIn:
    "https://www.linkedin.com/in/pedro-benjam%C3%ADn-ulloa-valenzuela-3a2098186/",
  github: "https://github.com/B3nj4-u",
  email: "pedro.ulloavalenzuela@gmail.com",
};

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar (aquí puedes incluirlo más tarde) */}
      <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r">
        {/* Contenido del Sidebar */}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden p-4">
        <header className="flex flex-col items-center justify-between p-4 bg-white dark:bg-gray-800 border-b md:flex-row">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">
              ¡Hola Mundo! ¡Soy Pedro!
            </h1>
            <h2 className="mt-2 text-lg text-gray-600 italic">
              Ingeniero Civil Informático y Business Intelligence
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              "Transformando datos en decisiones, protegiendo lo que importa."
            </p>
          </div>

          {/* Botones de redes sociales a la derecha */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <CorreoBoton correo={personalInfo.email} />

            <RedesSociales
              nombre="LinkedIn: Pedro Benjamín Ulloa Valenzuela"
              url={personalInfo.linkedIn}
              logo={In}
            />
            <RedesSociales
              nombre="GitHub: B3nj4-u"
              url={personalInfo.github}
              logo={Gh}
            />
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <PersonalInfo />
          <AboutMe />
          <Jobs />
          <ProjectsDisplay />
          <Separador />
          <Contactame />
        </main>

        <footer className="mt-4 p-4 bg-gray-800 text-white rounded-lg flex flex-col items-center">
          <p className="text-sm">
            © 2024 Pedro B. Ulloa Valenzuela - Todos los derechos reservados
          </p>
          <p className="mt-2 text-xs text-gray-400">
            "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora."
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
