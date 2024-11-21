import "../styles/Nav.css";
import logo from "../assets/logoNailSpa.png";
export default function NavEmpty() {
  return (
    <div className="nav-container">
      <div className="nav">
        <ul className="nav-link">
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
