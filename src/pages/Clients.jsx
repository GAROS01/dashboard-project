import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Clients.css";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/clientes")
      .then((response) => response.json())
      .then(
        (data) => setClients(data) || console.log("Clientes fetched:", data)
      )
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  const handleUpdate = (id) => {
    console.log("Actualizar cliente con ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Eliminar cliente con ID:", id);
  };

  return (
    <div>
      <Nav />
      <h1>Clientes</h1>
      <div className="clients-container">
        <table className="clients-table">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Correo Electronico</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id_cliente}>
                <td>{client.nombre_completo}</td>
                <td>{client.correo}</td>
                <td>{client.telefono}</td>
                <td>
                  <button
                    className="act"
                    onClick={() => handleUpdate(client.id_cliente)}
                  >
                    Actualizar
                  </button>
                  <button
                    className="del"
                    onClick={() => handleDelete(client.id_cliente)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
