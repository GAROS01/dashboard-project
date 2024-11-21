import { useState, useEffect } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Employes.css";

export default function Employes() {
  const [employes, setEmployes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/manicuristas")
      .then((response) => response.json())
      .then(
        (data) =>
          setEmployes(data) || console.log("Manicuristas fetched:", data)
      )
      .catch((error) => console.error("Error fetching manicuristas:", error));
  }, []);

  const handleUpdate = async (id) => {
    console.log("Actualizar manicurista con ID:", id);
    try {
      const employe = employes.find((employe) => employe.id_manicurista === id);
      const nombreCompleto = employe.nombre_completo;
      const correo = employe.correo;
      const telefono = employe.telefono;
      const response = await fetch(
        `http://localhost:4000/api/manicuristas/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre_completo: prompt(
              "Ingrese el nuevo nombre completo del manicurista:",
              nombreCompleto
            ),
            correo: prompt("Ingrese el nuevo correo del manicurista:", correo),
            telefono: prompt(
              "Ingrese el nuevo teléfono del manicurista:",
              telefono
            ),
          }),
        }
      );

      const data = await response.json();
      console.log("Manicurista actualizado:", data);
    } catch (error) {
      console.error("Error updating employe:", error);
    }
  };

  const handleDelete = (id) => {
    console.log("Eliminar manicurista con ID:", id);
    try {
      if (!employes.length) {
        throw new Error("No hay manicuristas disponibles para eliminar.");
      }

      const employe = employes.find((employe) => employe.id_manicurista === id);
      if (!employe) {
        throw new Error(`No se encontró ningún manicurista con el ID: ${id}`);
      }

      fetch(`http://localhost:4000/api/manicuristas/${id}`, {
        method: "DELETE",
      }).then(() => {
        setEmployes(
          employes.filter((employe) => employe.id_manicurista !== id)
        );
      });
    } catch (error) {
      console.error("Error deleting employe:", error);
    }
  };

  return (
    <div>
      <Nav />
      <h1>Manicuristas</h1>
      <div className="employes-container">
        <table className="employes-table">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Correo Electrónico</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {employes.map((employe) => (
              <tr key={employe.id_manicurista}>
                <td>{employe.nombre_completo}</td>
                <td>{employe.correo}</td>
                <td>{employe.telefono}</td>
                <td>
                  <button
                    className="act"
                    onClick={() => handleUpdate(employe.id_manicurista)}
                  >
                    Actualizar
                  </button>
                  <button
                    className="del"
                    onClick={() => handleDelete(employe.id_manicurista)}
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
