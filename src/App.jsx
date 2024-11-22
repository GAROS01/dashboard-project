import Rutas from "./router/Routes";
import { UserProvider } from "./context/UserContext";
import "./App.css";

export default function App() {
  return (
    <>
      <UserProvider>
        <Rutas />
      </UserProvider>
    </>
  );
}
