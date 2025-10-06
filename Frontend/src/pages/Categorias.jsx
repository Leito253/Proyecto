import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../Styles/Categorias.css";
import "../Styles/PaginaPrincipal.css";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Traemos todas las categorías
    fetch("http://localhost:5072/api/Categorias")
      .then((res) => res.json())
      .then((data) => setCategorias(data))
      .catch((err) => console.error(err));

    // Traemos todos los libros
    fetch("http://localhost:5072/api/Libros")
      .then((res) => res.json())
      .then((data) => {
        setLibros(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener libros:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="cargando">Cargando categorías...</div>;

  return (
    <main className="pagina-categorias">
      <h1 className="titulo-categorias">📖 Categorías</h1>

      {categorias.map((categoria) => {
        const librosCategoria = libros.filter(
          (libro) => libro.categoriaId === categoria.id
        );

        return (
          <section key={categoria.id} className="categoria-seccion">
            <h2 className="categoria-nombre">{categoria.nombre}</h2>
            <div className="grid-categoria">
              {librosCategoria.length > 0 ? (
                librosCategoria.map((libro) => (
                  <Link
                    key={libro.id}
                    to={`/libro/${libro.id}`}
                    className="book-link"
                  >
                    <BookCard
                      title={libro.titulo}
                      author={libro.autor}
                      cover={libro.urlPortada}
                    />
                  </Link>
                ))
              ) : (
                <p className="sin-libros">No hay libros en esta categoría.</p>
              )}
            </div>
          </section>
        );
      })}
    </main>
  );
}