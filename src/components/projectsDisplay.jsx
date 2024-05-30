import React from 'react';
import './projectsDisplay.css';

const ProjectsDisplay = () => {
  const projects = [
    {
      name: 'VOTONAUT',
      description: 'Sistema de votación online con base de datos en la blockchain de Polygon.',
      technologies: 'React, Truffle, Infura RPC, Blockchain Polygon',
      achievements: 'Desarrollo de un sistema de votación seguro y transparente.'
    },
    {
      name: 'Aplicación web para detección de vulnerabilidades',
      description: 'Herramienta de análisis de vulnerabilidades web.',
      technologies: 'Django, PostgreSQL, NIKTO, NPAM, SQL Injection, XSSstrike',
      achievements: 'Generación de reportes detallados de vulnerabilidades.'
    },
    {
      name: 'MIESCUELASALUDABLE.CL',
      description: 'Sitio web educativo sobre cuidado, movimiento y nutrición para niños.',
      technologies: 'WordPress, cPanel',
      achievements: 'Diseño y desarrollo full stack de un sitio web educativo.'
    },
    {
      name: 'Emporio de Laura',
      description: 'Administración de página web para una tienda física.',
      technologies: 'WordPress',
      achievements: 'Mantenimiento eficiente del inventario digital.'
    }
  ];

  return (
    <div className="projects-container">
    <h2>PROYECTOS EN QUE HE PARTICIPADO:</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-technologies"><strong>Tecnologías:</strong> {project.technologies}</p>
          <p className="project-achievements"><strong>Logros:</strong> {project.achievements}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsDisplay;
