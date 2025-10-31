import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/LibroDetalle.css";

export default function LibroDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [libro, setLibro] = useState(null);
  const [reseñas, setReseñas] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevaPuntuacion, setNuevaPuntuacion] = useState(5);

  const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");

  useEffect(() => {
    fetch(`http://localhost:5072/api/libros/${id}`)
      .then((res) => res.json())
      .then((data) => setLibro(data))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5072/api/reseñas/libro/${id}`)
      .then((res) => res.json())
      .then((data) => setReseñas(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!libro) return <h2>Cargando libro...</h2>;
  if (!reseñas) return <h2>Cargando reseñas...</h2>;
  
  const handleAgregarReseña = () => {
    if (!usuario.email) {
      alert("Debes iniciar sesión para dejar una reseña.");
      return;
    }

    const token = localStorage.getItem("token");

    fetch("http://localhost:5072/api/reseñas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        libroId: parseInt(id),
        usuarioId: usuario.id,
        contenido: nuevoComentario,
        puntuacion: nuevaPuntuacion,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReseñas((prev) => [data, ...prev]);
        setNuevoComentario("");
        setNuevaPuntuacion(5);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="libro-detalle">
      <button className="btn-volver" onClick={() => navigate(-1)}>
        ⬅ Volver
      </button>

      <h1 className="titulo-libro">{libro.titulo}</h1>
      <p className="descripcion-libro">{libro.descripcion}</p>

      <div className="pdf-container">
        <iframe
          src={`http://localhost:5072${libro.urlPdf}`}
          title={libro.titulo}
          className="pdf-viewer"
        />
      </div>
      <hr />
      <h2>Reseñas</h2>

      {usuario.email && (
        <div className="nueva-reseña">
          <textarea
            placeholder="Escribe tu reseña..."
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
          />
          <br />
          <label>
            Puntuación:
            <select
              value={nuevaPuntuacion}
              onChange={(e) => setNuevaPuntuacion(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
          <button onClick={handleAgregarReseña}>Agregar Reseña</button>
        </div>
      )}

      {reseñas.length === 0 ? (
        <p>No hay reseñas aún.</p>
      ) : (
        reseñas.map((r) => (
          <div key={r.id} className="reseña">
            <p><strong>Usuario ID:</strong> {r.usuarioId}</p>
            <p>{r.comentario}</p>
            <p><strong>Puntuación:</strong> {r.puntuacion}/5</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
