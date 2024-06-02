import React, { useState } from "react";
import Modal from "./modal";
import './jobs.css';

function Jobs() {
  // Estado para controlar la visibilidad de los modales
  const [isModalInformaticaOpen, setIsModalInformaticaOpen] = useState(false);
  const [isModalOtrosOpen, setIsModalOtrosOpen] = useState(false);

  // Funciones para abrir los modales
  const openModalInformatica = () => {
    document.body.style.overflow = "hidden";
    setIsModalInformaticaOpen(true);
  };
  const openModalOtros = () => {
    document.body.style.overflow = "hidden";
    setIsModalOtrosOpen(true);
  };

  // Funciones para cerrar los modales
  const closeModalInformatica = () => {
    document.body.style.overflow = "visible";
    setIsModalInformaticaOpen(false);
  };
  const closeModalOtros = () => {
    document.body.style.overflow = "visible";
    setIsModalOtrosOpen(false);
  };

  const empleosInformatica = [
    {
      empresa: "Universidad de Los Lagos",
      periodo: "13 diciembre 2021 - 09 mayo 2022",
      cargo: "Desarrollador de Back End en Página Web",
      funciones: "Diseño e implementación de página web.",
    },
    {
      empresa: "AKZIO",
      periodo: "5 abril 2023 - 31 julio 2023",
      cargo: "Practicante",
      funciones: "Desarrollador web full stack.",
    },
    {
      empresa: "ESCUELA RURAL LA PALOMA",
      periodo: "Mayo 2024 - Actualidad",
      cargo: "Técnico Informático",
      funciones:
        "Soporte técnico informático, mantención de equipos, creación de material educativo.",
    },
  ];

  const otrosEmpleos = [
    {
      empresa: "Constructora Don Jaime",
      periodo: "Septiembre 2017 - Marzo 2018",
      cargo: "Ayudante de Maestro Constructor",
      funciones:
        "Soldadura, cementación, construcción con estructuras metálicas.",
    },
    {
      empresa: "Escuela Cayenel",
      periodo: "2018 - 2019",
      cargo: "Vigilante Nocturno",
      funciones: "Encargado de seguridad.",
    },
    {
      empresa: "Clínica Universitaria San Sebastián",
      periodo: "2020 - 2020",
      cargo: "Vigilante Nocturno",
      funciones: "Encargado de seguridad.",
    },
    {
      empresa: "SERVEL",
      periodo: "25 octubre 2020 - 25 octubre 2020",
      cargo: "Ayudante PESE",
      funciones:
        "Ayudante del encargado PESE en local de votación en plebiscito nacional.",
    },
    {
      empresa: "Emporio de Laura",
      periodo: "Enero 2021 - Junio 2021",
      cargo: "Vendedor",
      funciones: "Administración del local.",
    },
    {
      empresa: "SERVEL",
      periodo: "15 mayo 2021 - 16 mayo 2021",
      cargo: "Ayudante PESE",
      funciones:
        "Ayudante del encargado PESE en local de votación en elección de constituyentes.",
    },
    {
      empresa: "SERVEL",
      periodo: "21 noviembre 2021 - 22 noviembre 2021",
      cargo: "Ayudante PESE Nocturno",
      funciones:
        "Encargado de seguridad durante la noche en elecciones presidenciales.",
    },
    {
      empresa: "Escuela La Vara",
      periodo: "Enero 2022 - Abril 2022",
      cargo: "Ayudante de Maestro Soldador",
      funciones: "Instalación de sistema de calefacción.",
    },
    {
      empresa: "SERVEL",
      periodo: "4 septiembre 2022 - 4 septiembre 2022",
      cargo: "Ayudante PESE",
      funciones:
        "Ayudante del encargado PESE en local de votación en plebiscito constitucional.",
    },
    {
      empresa: "SURPRICES",
      periodo: "Abril 2024 - Mayo 2024",
      cargo: "Bodeguero",
      funciones: "Inventario y orden.",
    },
  ];
  return (
    <div>
      <h2>Experiencia Laboral:</h2>
      <button className="button" onClick={openModalInformatica}>
        Ver Empleos del Área Informática
      </button>
      <button className="button" onClick={openModalOtros}>Ver Otros Empleos</button>
      {isModalInformaticaOpen && (
        <Modal onClose={closeModalInformatica}>
          <h2>Empleos en Informática</h2>
          {empleosInformatica.map((empleo, index) => (
            <div key={index} className="empleo">
              <h3>{empleo.empresa}</h3>
              <p>
                <strong>Periodo:</strong> {empleo.periodo}
              </p>
              <p>
                <strong>Cargo:</strong> {empleo.cargo}
              </p>
              <p>
                <strong>Funciones:</strong> {empleo.funciones}
              </p>
            </div>
          ))}
        </Modal>
      )}

      {isModalOtrosOpen && (
        <Modal onClose={closeModalOtros}>
          <h2>Otros Empleos</h2>
          {otrosEmpleos.map((empleo, index) => (
            <div key={index} className="empleo">
              <h3>{empleo.empresa}</h3>
              <p>
                <strong>Periodo:</strong> {empleo.periodo}
              </p>
              <p>
                <strong>Cargo:</strong> {empleo.cargo}
              </p>
              <p>
                <strong>Funciones:</strong> {empleo.funciones}
              </p>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
}

export default Jobs;
