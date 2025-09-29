import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/LibroDetalle.css";

export default function LibroDetalle() {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5072/api/libros/${id}`)
      .then((res) => res.json())
      .then((data) => setLibro(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!libro) return <h2>Cargando libro...</h2>;

  return (
    <div className="libro-detalle">
      <h1 className="titulo-libro">{libro.titulo}</h1>
      <p className="descripcion-libro">{libro.descripcion}</p>

      <div className="pdf-container">
        <iframe
          src={`http://localhost:5072${libro.urlPdf}`}
          title={libro.titulo}
          className="pdf-viewer"
        />
      </div>
    </div>
  );
}
