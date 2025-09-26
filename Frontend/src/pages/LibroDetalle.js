import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/LibroDetalle.css";

export default function LibroDetalle() {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5072/api/Libros/${id}`)
      .then(res => res.json())
      .then(data => {
        setLibro(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener libro:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="cargando">Cargando libro...</div>;
  if (!libro) return <div className="cargando">Libro no encontrado</div>;

  return (
    <div className="libro-detalle-container">
      <h1>{libro.titulo}</h1>
      <h3>{libro.autor}</h3>
      <p className="descripcion">{libro.descripcion}</p>
      <div className="pdf-container">
        <iframe
          src={libro.urlPdf}
          title={libro.titulo}
          width="100%"
          height="500px"
        ></iframe>
      </div>
    </div>
  );
}
