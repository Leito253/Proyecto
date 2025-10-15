import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchActive((prev) => !prev);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/buscar?query=${encodeURIComponent(search.trim())}`);
      setSearchActive(false);
      setSearch("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1>Netflix de Libros</h1>

        <div className="navbar-right">
          <div className="search-container" ref={searchRef}>
            <button className="search-toggle" onClick={toggleSearch}>
              <FaSearch />
            </button>
            <form
              className={`search-box ${searchActive ? "active" : ""}`}
              onSubmit={handleSearchSubmit}
            >
              <input
                type="text"
                placeholder="Buscar libros..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Inicio</Link>
        <Link to="/sobre-nosotros" onClick={toggleMenu}>Sobre Nosotros</Link>
        <Link to="/categoria" onClick={toggleMenu}>Categorías</Link>
        <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>

        {usuario && <Link to="/cuenta" onClick={toggleMenu}>Mi Cuenta</Link>}
      </div>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
