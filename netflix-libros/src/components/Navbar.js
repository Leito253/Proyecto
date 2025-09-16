import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  // Estado para activar animación al cargar
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className={`navbar-logo ${loaded ? "loaded" : ""}`}>Netflix Libros</div>

      {/* Enlaces */}
      <div className="navbar-links">
        <a href="#">Inicio</a>
        <a href="#">Categorías</a>
        <a href="#">Mi biblioteca</a>
      </div>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar libros..."
        className="navbar-search"
      />
    </nav>
  );
}

export default Navbar;
