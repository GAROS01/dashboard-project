import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "../styles/Quotes.css";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/citas")
      .then((response) => response.json())
      .then((data) => setQuotes(data) || console.log("Quotes fetched:", data))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  const handleUpdate = async (id) => {
    console.log("Actualizar cita con ID:", id);
    try {
      if (!quotes.length) {
        throw new Error("No hay citas disponibles para actualizar.");
      }

      const quote = quotes.find((quotes) => quotes.id_cita === id);
      if (!quote) {
        throw new Error(`No se encontró ninguna cita con el ID: ${id}`);
      }

      const cliente = quote.id_cliente.id_cliente;
      const manicurista = quote.id_manicurista.id_manicurista;

      const fecha = new Date(quote.fecha);
      const response = await fetch(`http://localhost:4000/api/citas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fecha: prompt(
            "Ingrese la nueva fecha de la cita: (AA-MM-DD)",
            `${fecha.toISOString().split("T")[0]}`
          ),
          hora: prompt("Ingrese la nueva hora de la cita:", quote.hora),
          id_cliente: cliente,
          id_manicurista: manicurista,
        }),
      });

      const data = await response.json();
      console.log("Cita actualizada:", data);
    } catch (error) {
      console.error("Error updating quote:", error);
    }
  };

  const handleDelete = (id) => {
    console.log("Eliminar cita con ID:", id);
  };

  return (
    <div>
      <Nav />
      <h1>Citas</h1>
      <table className="quotes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Cliente</th>
            <th>Manicurista</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.id_cita}>
              <td>{quote.id_cita}</td>
              <td>{new Date(quote.fecha).toLocaleDateString()}</td>
              <td>{quote.hora}</td>
              <td>{quote.id_cliente.nombre_completo}</td>
              <td>{quote.id_manicurista.nombre_completo}</td>
              <td>
                <button
                  className="act"
                  onClick={() => handleUpdate(quote.id_cita)}
                >
                  Actualizar
                </button>
                <button
                  className="del"
                  onClick={() => handleDelete(quote.id_cita)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
