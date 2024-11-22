import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import NavEmpty from "../components/NavEmpty";
import Footer from "../components/Footer";
import "../styles/Session.css";

export default function Session() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { user, login, logout } = useContext(UserContext);

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

      const data = await response.json();
      login(data);
      navigate("/citas");
      console.log("Inicio de sesión exitoso:", data);
    } catch (error) {
      console.error("Error:", error);
      setError("Correo electrónico o contraseña incorrectos");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <NavEmpty />

      <div className="session-container">
        {user ? (
          <div className="session-card">
            <h2>Bienvenido, {user[0].nombre_completo}</h2>
            <p className="p">Navis Gamboa Nails Spa</p>
            <button className="logout-button" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <>
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
              <button className="login-button" type="submit">
                Iniciar Sesión
              </button>
            </form>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
