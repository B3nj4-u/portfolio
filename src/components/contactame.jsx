import React, { useState } from "react";
import { sendForm } from "@emailjs/browser";

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
    <div className="flex flex-col items-center justify-center p-16 bg-gray-200 border border-gray-300 text-black rounded-2xl shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Contáctame</h1>
      <form className="flex flex-col w-full" onSubmit={sendEmail}>
        <label htmlFor="nombre" className="mb-2">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required className="p-2 mb-4 border border-gray-300 rounded" />

        <label htmlFor="email" className="mb-2">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required className="p-2 mb-4 border border-gray-300 rounded" />

        <label htmlFor="numero" className="mb-2">Número Telefónico:</label>
        <input
          type="tel"
          id="numero"
          name="numero"
          value={telefono}
          onChange={handleTelefonoChange}
          required
          className="p-2 mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="mensaje" className="mb-2">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          className="p-2 mb-4 border border-gray-300 rounded h-24"
        ></textarea>

        <button type="submit" className="mt-4 p-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default Contactame;
