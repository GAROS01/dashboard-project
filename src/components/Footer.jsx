import logo from "../assets/garosdev.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <h6>
          Desarrollado con ❤️ <span>&#11044;</span> GarosDev
        </h6>
        <div className="logo-container">
          <img src={logo} alt="GarosDev" className="logo" />
        </div>
      </footer>
    </div>
  );
}
