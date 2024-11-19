import { Link } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul className="nav-link">
          <li>
            <Link className="link" to="/citas">
              Citas
            </Link>
          </li>
          <li>
            <Link className="link" to="/clientes">
              Clientes
            </Link>
          </li>
          <li>
            <Link className="link" to="/manicuristas">
              Manicuristas
            </Link>
          </li>
          <li>
            <Link className="link" to="/sesion">
              Sesión
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
