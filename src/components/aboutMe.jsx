import React from "react";
import "./aboutMe.css";

function AboutMe() {
  const sobreMi = `Licenciado en Ciencias de la Ingeniería, Egresado de Ingeniería Civil en Informática y Analista de Datos Junior. 
  Amplia capacidad para resolución de problemas, creativo y proactivo. Soy una persona confiable a la cual le gusta trabajar en equipo. 
  Tengo buena gestión de tiempo y de recursos, además de buena comunicación y facilidad para atención al cliente.`;

  return (
    <>
      <section id="sobre-mi">
        <h2>Sobre Mí</h2>
        <p>{sobreMi}</p>
      </section>
    </>
  );
}

export default AboutMe;
