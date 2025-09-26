import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <h1>Netflix de Libros</h1>
      </nav>

      <div className={`sidebar ${open ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/sobre-nosotros" onClick={toggleMenu}>Sobre Nosotros</Link>
        <Link to="/categoria" onClick={toggleMenu}>Categorías</Link>
        <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
      </div>

      {open && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
