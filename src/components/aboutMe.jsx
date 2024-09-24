import React from "react";
import Desplegable from './desplegable';

const AboutMe = () => {
  const resumenProfesional = `Ingeniero Civil Informático con experiencia en ciberseguridad, análisis de datos y desarrollo de software. Especialista en automatización de procesos de ciberseguridad con Python, pentesting y seguridad de redes. Como Ingeniero BI, domino herramientas como Power BI y hojas de cálculo para análisis de datos, además de poseer un amplio conocimiento en bases de datos. Me apasiona la blockchain por su capacidad de garantizar la seguridad de la información de manera matemática. Programo en lenguajes como Python, JavaScript, TypeScript, Java, C y C++. Soy proactivo, orientado a resultados y me destaco por mi liderazgo y capacidad para explicar conceptos complejos de manera sencilla.`;

  const objetivoProfesional = `Mi objetivo es aplicar mis conocimientos en ciberseguridad, análisis de datos y machine learning en proyectos que integren inteligencia artificial avanzada y técnicas de automatización. Estoy especialmente interesado en trabajar con IA generativa y tecnologías emergentes en el campo del aprendizaje automático. Busco colaborar en entornos desafiantes y dinámicos donde pueda contribuir a la innovación y seguir perfeccionando mis habilidades técnicas, con miras a liderar proyectos que utilicen tecnologías de vanguardia para resolver problemas complejos de manera eficiente.`;

  return (
    <div className="mt-24 mb-12 flex flex-col items-center">
      <Desplegable titulo="Resumen Profesional" descripcion={resumenProfesional} />
      <Desplegable titulo="Objetivo Profesional" descripcion={objetivoProfesional} />
    </div>
  );
};

export default AboutMe;
