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
    <div className="projects-container">
      <h2>PROYECTOS EN QUE HE PARTICIPADO:</h2>
      <button className="button" onClick={handleOpenModal}> <p className="button-p">Mostrar proyectos</p></button>

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
