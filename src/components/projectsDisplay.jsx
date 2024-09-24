import React, { useState, useEffect } from "react";
import Modal from "./modal";

const ProjectsDisplay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    document.body.style.overflow = "visible";
    setIsModalOpen(false);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calcular el ángulo del degradado
  const angle = (mousePosition.x / window.innerWidth) * 360;

  // Generar colores aleatorios para el degradado
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Crear un degradado con múltiples colores
  const gradientColors = [
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ];

  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${gradientColors.join(", ")})`,
    transition: 'background 0.3s ease',
  };

  const projects = [
    {
      name: "Formalización de Trayectorias Probabilísticas en Teoría de Juegos",
      description:
        "Desarrollo de un modelo teórico para analizar cómo los jugadores toman decisiones en juegos estratégicos, usando trayectorias probabilísticas para predecir el comportamiento y sus consecuencias.",
      technologies: "Python, NumPy, Matplotlib",
      achievements:
        "Creación de un marco matemático que define las trayectorias de los jugadores y sus interacciones. Complementado con una simulación para visualizar X cantidad de jugadas y entender el impacto de las decisiones de los jugadores.",
    },
    {
      name: "VOTONAUT",
      description:
        "Sistema de votación online con base de datos en la blockchain de Polygon.",
      technologies: "React, Truffle, Infura RPC, Blockchain Polygon",
      achievements:
        "Desarrollo de un sistema de votación seguro y transparente.",
    },
    {
      name: "Aplicación web para detección de vulnerabilidades",
      description: "Herramienta de análisis de vulnerabilidades web.",
      technologies: "Django, PostgreSQL, NIKTO, NMAP, SQLmap, XSStrike",
      achievements: "Generación de reportes detallados de vulnerabilidades.",
    },
    {
      name: "MIESCUELASALUDABLE.CL",
      description:
        "Sitio web educativo sobre cuidado, movimiento y nutrición para niños.",
      technologies: "WordPress, cPanel",
      achievements: "Diseño y desarrollo full stack de un sitio web educativo.",
    },
  ];

  return (
    <div className="projects-container text-center my-8" onMouseMove={handleMouseMove}>
      <h2 className="text-2xl font-bold">Proyectos:</h2>
      <button 
        className="mt-4 px-4 py-2 text-white rounded transition duration-300"
        style={gradientStyle}
        onClick={handleOpenModal}
      >
        Mostrar proyectos
      </button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-6">Proyectos</h2>
          {projects.map((project, index) => (
            <div key={index} className="project my-4 p-6 bg-white rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-2"><strong>Descripción:</strong> {project.description}</p>
              <p className="text-gray-700 mb-2"><strong>Tecnologías:</strong> {project.technologies}</p>
              <p className="text-gray-700"><strong>Logros:</strong> {project.achievements}</p>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default ProjectsDisplay;
