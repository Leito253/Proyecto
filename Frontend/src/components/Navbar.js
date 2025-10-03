import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [resultados, setResultados] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    if (search.trim() !== "") {
      fetch(`http://localhost:5072/api/libros/buscar?query=${search}`)
        .then(res => res.json())
        .then(data => {
          setResultados(data);
          setShowDropdown(true);
        })
        .catch(err => console.error(err));
    } else {
      setResultados([]);
      setShowDropdown(false);
    }
  }, [search]);

  const handleSelect = () => {
    setSearch("");
    setShowDropdown(false);
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <h1>Netflix de Libros</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar libros..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch />
          {showDropdown && resultados.length > 0 && (
            <div className="search-dropdown">
              {resultados.map((libro) => (
                <Link
                  to={`/libro/${libro.id}`}
                  key={libro.id}
                  onClick={handleSelect}
                  className="dropdown-item"
                >
                  {libro.titulo} - {libro.autor}
                </Link>
              ))}
            </div>
          )}
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div className={`sidebar ${open ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Inicio</Link>
        <Link to="/sobre-nosotros" onClick={toggleMenu}>Sobre Nosotros</Link>
        <Link to="/categoria" onClick={toggleMenu}>Categorías</Link>
        <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
      </div>

      {open && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
