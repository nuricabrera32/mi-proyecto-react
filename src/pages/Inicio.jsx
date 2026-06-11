import "../pages/Inicio.css";

function Inicio() {
  return (
    <div className="inicio">

      <h1>Día del Trabajo en Bolivia</h1>

      <nav className="menu">
        <a href="/inicio">Inicio</a>
        <a href="/historia">Historia</a>
        <a href="/personajes">Personajes</a>
        <a href="/feriado">Feriado</a>
        <a href="/galeria">Galería</a>
      </nav>

      <div className="contenido">

        <div className="carrusel">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Trabajadores"
          />
        </div>

        <div className="card">
          <h2>Bienvenido</h2>

          <p>
            El Día Internacional de los Trabajadores se celebra cada
            1 de mayo para reconocer la lucha de los trabajadores
            por mejores condiciones laborales y derechos sociales.
          </p>

          <p>
            En Bolivia esta fecha es un feriado nacional y se realizan
            actos conmemorativos en distintas ciudades.
          </p>
        </div>

      </div>

      <footer>
        Diseñado por Cabrera Carvajal Nuriel Ramiro, 
      </footer>

    </div>
  );
}

export default Inicio;