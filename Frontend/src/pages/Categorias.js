import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../Styles/PaginaPrincipal.css";

export default function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategoria, setSelectedCategoria] = useState(null);

    // Obtener todas las categorías
    useEffect(() => {
        fetch("http://localhost:5072/api/categorias")
            .then(res => res.json())
            .then(data => setCategorias(data))
            .catch(err => console.error(err));
    }, []);

    // Obtener libros de la categoría seleccionada
    useEffect(() => {
        if (selectedCategoria) {
            setLoading(true);
            fetch(`http://localhost:5072/api/categorias/${selectedCategoria}/libros`)
                .then(res => res.json())
                .then(data => {
                    setLibros(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [selectedCategoria]);

    if (loading) return <div className="cargando">Cargando libros...</div>;

    return (
        <main className="Categorias">
            <h1 className="titulo">📚 Libros por Categoría</h1>

            <div className="categoria-buttons">
                {categorias.map(cat => (
                    <button key={cat.id} onClick={() => setSelectedCategoria(cat.id)}>
                        {cat.nombre}
                    </button>
                ))}
            </div>

            <div className="grid">
                {libros.map(libro => (
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
