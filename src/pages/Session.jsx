import { useState } from "react";
import { useNavigate } from "react-router";
import NavEmpty from "../components/NavEmpty";
import Footer from "../components/Footer";
import "../styles/Session.css";

export default function Session() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4000/api/administrativos/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ correo: email, contrasea: password }),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la autenticación");
      }

      navigate("/citas");
      const data = await response.json();
      console.log("Inicio de sesión exitoso:", data);
    } catch (error) {
      console.error("Error:", error);
      setError("Correo electrónico o contraseña incorrectos");
    }
  };

  return (
    <>
      <NavEmpty />
      <div className="session-container">
        <h2>Inicio de Sesión</h2>
        {error && <p className="error-message">{error}</p>}
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
          <button className="submit-button" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
