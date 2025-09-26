import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../Styles/PaginaPrincipal.css";

export default function PaginaPrincipal() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5072/api/Libros")
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta del servidor");
        return res.json();
      })
      .then((data) => {
        setLibros(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener libros:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="cargando">Cargando libros...</div>;

  return (
    <main className="pagina-principal">
      <h1 className="titulo">Libros Disponibles</h1>
      <div className="grid">
        {libros.map((libro) => (
          <Link key={libro.id} to={`/libro/${libro.id}`} className="book-link">
            <BookCard
              title={libro.titulo}
              author={libro.autor}
              cover={libro.urlPortada}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
