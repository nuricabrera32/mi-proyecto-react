import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "../src/pages/Inicio";
import Historia from "../src/pages/Historia";
import Personajes from "../src/pages/Personajes";
import Feriado from "../src/pages/Feriado";
import Galeria from "../src/pages/Galeria";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/personajes">Personajes</Link>
          <Link to="/feriado">Feriado</Link>
          <Link to="/galeria">Galería</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/feriado" element={<Feriado />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;