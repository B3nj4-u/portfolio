import React from "react";
import "./personalInfo.css";
import RedesSociales from "./redesSociales";
import In from "../../public/in.png";
import Gh from "../../public/gh.png";

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
    <>
      <header className="App-header">
        <div className="header-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TeF7qH7IxB1quC4ZFvLp7CEe9cstqfC39A&s"
            alt="Imagen en construcción"
            className="imagen-circular"
          />
          <div>
            <h1>PAGINA EN CONSTRUCCION</h1>
            <h2>{personalInfo.nombre}</h2>
          </div>
        </div>
      </header>
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
    </>
  );
}

export default PersonalInfo;
