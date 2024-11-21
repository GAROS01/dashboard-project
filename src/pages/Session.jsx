import { useState } from "react";
import "../styles/Session.css";
import NavEmpty from "../components/NavEmpty";

export default function Session() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <NavEmpty />
      <div className="session-container">
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleSubmit} className="session-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </>
  );
}
