import React, { useState } from "react";
import "./projectsDisplay.css";
import Modal from "./modal";

const ProjectsDisplay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    document.body.style.overflow = "visible";
    setIsModalOpen(false);
  };

  const projects = [
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
      technologies: "Django, PostgreSQL, NIKTO, NPAM, SQL Injection, XSSstrike",
      achievements: "Generación de reportes detallados de vulnerabilidades.",
    },
    {
      name: "MIESCUELASALUDABLE.CL",
      description:
        "Sitio web educativo sobre cuidado, movimiento y nutrición para niños.",
      technologies: "WordPress, cPanel",
      achievements: "Diseño y desarrollo full stack de un sitio web educativo.",
    },
    {
      name: "Emporio de Laura",
      description: "Administración de página web para una tienda física.",
      technologies: "WordPress",
      achievements: "Mantenimiento eficiente del inventario digital.",
    },
  ];

  return (
    <div className="projects-container">
      <h2>PROYECTOS EN QUE HE PARTICIPADO:</h2>
      <button onClick={handleOpenModal}>Mostrar proyectos</button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2>Proyectos</h2>
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>Tecnologías: {project.technologies}</p>
              <p>Logros: {project.achievements}</p>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default ProjectsDisplay;
