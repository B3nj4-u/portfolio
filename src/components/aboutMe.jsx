import React, { useState } from "react";
import "./aboutMe.css";

import Desplegable from './desplegable';

function AboutMe() {
  const resumenProfesional = `Ingeniero Civil Informático con experiencia como Analista de Datos Junior. Poseo habilidades en desarrollo de software, análisis de datos y ciberseguridad. Proactivo y orientado a resultados, con capacidad para trabajar en equipo y adaptarme a nuevos desafíos.`;

  const objetivoProfesional = `Busco desarrollarme como Ingeniero de Datos especializado en Machine Learning e Inteligencia Artificial. Actualmente, estoy fortaleciendo mis habilidades en análisis de datos a través de la certificación ofrecida por Google Careers. Posteriormente, planeo ampliar mis conocimientos en ingeniería de datos utilizando Python y R. Aspiro a contribuir significativamente en proyectos innovadores y dinámicos, preferiblemente en un entorno remoto que me permita flexibilidad geográfica (no excluyente).`;

  return (
    <div className="botoncitos">
      <Desplegable  titulo="Resumen Profesional" descripcion={resumenProfesional} />
      <Desplegable titulo="Objetivo Profesional" descripcion={objetivoProfesional} />
    </div>
  );
}

export default AboutMe;
