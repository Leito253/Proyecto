import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchActive(!searchActive);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/buscar?query=${encodeURIComponent(search.trim())}`);
      setSearchActive(false);
      setSearch("");
    }
  };

  return (
    <>
      <nav className="navbar">
        <h1>Netflix de Libros</h1>

        <div className="navbar-right">
          <div className="search-container">
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
      </div>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
