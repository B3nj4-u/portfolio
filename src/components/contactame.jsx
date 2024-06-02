import React, { useState } from "react";
import { sendForm } from "@emailjs/browser";
import "./contactame.css";

const idService = import.meta.env.VITE_SERVICE_ID;
const idTemplate = import.meta.env.VITE_TEMPLATE_ID;
const idUser = import.meta.env.VITE_USER_ID;

const Contactame = () => {
  const [loading, setLoading] = useState(false);
  const [telefono, setTelefono] = useState("");
  const handleTelefonoChange = (event) => {
    const value = event.target.value;
    const formattedValue = value.replace(/[^0-9]/g, "");
    setTelefono(formattedValue);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    sendForm(idService, idTemplate, e.target, idUser).then(
      (result) => {
        console.log(result.text);
        window.alert("Correo enviado con éxito!");
        setTimeout(() => setLoading(false), 200);
      },
      (error) => {
        console.log(error.text);
        window.alert("Ocurrió un error al enviar el correo.");
        setTimeout(() => setLoading(false), 200);
      }
    );
  };

  return (
    <>
      <h1>Contactame</h1>

      <div className="contactame-container">
        <form className="contactame-form" onSubmit={sendEmail}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="numero">Número Telefónico:</label>
          <input
            type="tel"
            id="numero"
            name="numero"
            value={telefono}
            onChange={handleTelefonoChange}
            required
          />
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
          <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
        </form>
      </div>
    </>
  );
};

export default Contactame;
