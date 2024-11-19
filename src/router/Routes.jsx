import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Quotes from "../pages/Quotes";
import Clients from "../pages/Clients";
import Employes from "../pages/Employes";
import Session from "../pages/Session";

export default function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Quotes />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/manicuristas" element={<Employes />} />
        <Route path="/sesion" element={<Session />} />
      </Routes>
    </>
  );
}
