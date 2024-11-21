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

  const handleUpdate = async (id) => {
    console.log("Actualizar cliente con ID:", id);
    try {
      const client = clients.find((client) => client.id_cliente === id);
      const nombreCompleto = client.nombre_completo;
      const correo = client.correo;
      const telefono = client.telefono;
      const response = await fetch(`http://localhost:4000/api/clientes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre_completo: prompt(
            "Ingrese el nuevo nombre completo del cliente:",
            nombreCompleto
          ),
          correo: correo,
          telefono: prompt("Ingrese el nuevo teléfono del cliente:", telefono),
        }),
      });

      const data = await response.json();
      console.log("Cliente actualizado:", data);
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  const handleDelete = (id) => {
    console.log("Eliminar cliente con ID:", id);
    try {
      if (!clients.length) {
        throw new Error("No hay clientes disponibles para eliminar.");
      }

      fetch(`http://localhost:4000/api/clientes/${id}`, {
        method: "DELETE",
      }).then(() => {
        const newClients = clients.filter((client) => client.id_cliente !== id);
        setClients(newClients);
      });
    } catch (error) {
      console.error("Error deleting client:", error);
    }
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
