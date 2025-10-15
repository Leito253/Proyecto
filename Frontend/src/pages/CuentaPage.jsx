import React from "react";
import "../Styles/CuentaPage.css";

export default function CuentaPage() {
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");

  if (!usuario) return <p>No hay usuario logueado</p>;

  return (
    <div className="cuenta-container">
      <h1>Mi Cuenta</h1>
      <img src={usuario.imagen} alt="Foto de perfil" width={100} />
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <button onClick={() => {
        localStorage.removeItem("usuario");
        window.location.href = "/login";
      }}>
        Cerrar sesión
      </button>
    </div>
  );
}
