import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "../styles/Quotes.css";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/citas")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  const handleUpdate = (id) => {
    console.log("Actualizar cita con ID:", id);
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
