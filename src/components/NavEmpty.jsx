import logo from "../assets/logoNailSpa.png";
import "../styles/NavEmpty.css";

export default function NavEmpty() {
  return (
    <div className="nav-empty-container">
      <div className="nav-empty">
        <ul className="nav-empty-link">
          <li className="link"></li>
          <li className="link"></li>
          <li className="link"></li>
          <li className="link"></li>
        </ul>
        <img className="logo-nav" src={logo} alt="logo" />
      </div>
    </div>
  );
}
