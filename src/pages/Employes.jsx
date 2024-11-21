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

  const handleUpdate = (id) => {
    console.log("Actualizar manicurista con ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Eliminar manicurista con ID:", id);
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
