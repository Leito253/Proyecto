import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../Styles/PaginaPrincipal.css";

export default function Buscar() {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate(); // 👈 para volver atrás

    const query = new URLSearchParams(location.search).get("query");

    useEffect(() => {
        if (!query) return;

        setLoading(true);
        fetch(`http://localhost:5072/api/Libros/buscar?query=${encodeURIComponent(query)}`)
            .then((res) => {
                if (!res.ok) throw new Error("Error al obtener resultados");
                return res.json();
            })
            .then((data) => {
                setLibros(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error en búsqueda:", err);
                setLoading(false);
            });
    }, [query]);

    if (loading) return <div className="cargando">Buscando libros...</div>;

    return (
        <main className="pagina-principal">
            <button className="btn-volver" onClick={() => navigate(-1)}>
                ⬅ Volver
            </button>

            <h1 className="titulo">🔍 Resultados para: "{query}"</h1>

            <div className="grid">
                {libros.length === 0 ? (
                    <p>No se encontraron resultados.</p>
                ) : (
                    libros.map((libro) => (
                        <Link key={libro.id} to={`/libro/${libro.id}`} className="book-link">
                            <BookCard
                                title={libro.titulo}
                                author={libro.autor}
                                cover={libro.urlPortada}
                            />
                        </Link>
                    ))
                )}
            </div>
        </main>
    );
}
