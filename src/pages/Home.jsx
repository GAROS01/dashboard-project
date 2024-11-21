import { useNavigate } from "react-router";

import "../styles/Home.css";
import logo from "../assets/logoNailSpa.png";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/sesion");
  };
  return (
    <>
      <div className="home-container">
        <h1>Dashboard</h1>

        <h2>Navis Gamboa Nalis Spa</h2>
        <img className="logo-inicio" src={logo} alt="logo" />
        <div className="home">
          <div className="home-card">
            <h3>Administrador</h3>
            <p>Inicio de sesión</p>
            <button className="ir" onClick={handleNavigate}>
              Ir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
