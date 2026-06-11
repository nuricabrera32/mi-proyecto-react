import "../pages/Personajes.css";

function Personajes() {
  return (
    <div className="personajes">

      <h1>Personajes Importantes</h1>

      <div className="cards">

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="Personaje"
          />
          <h2>Albert Parsons</h2>
          <p>Líder del movimiento obrero.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            alt="Personaje"
          />
          <h2>August Spies</h2>
          <p>Representante de los trabajadores.</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1504257432389-52343af06ae3"
            alt="Personaje"
          />
          <h2>Adolph Fischer</h2>
          <p>Defensor de los derechos laborales.</p>
        </div>

      </div>

    </div>
  );
}

export default Personajes;