import React, { useState } from "react";

export default function RegistroPage() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleRegistro = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5072/api/Usuarios/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, apellido, email, password })
        });

        if (!response.ok) {
            const error = await response.json();
            setMensaje(error.mensaje || "Error al registrarse");
            return;
        }

        const data = await response.json();
        localStorage.setItem("usuario", JSON.stringify(data));
        window.location.href = "/";
    };

    return (
        <div className="registro-container">
            <h1>Registrarse</h1>
            <form onSubmit={handleRegistro}>
                <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
                <input type="text" placeholder="Apellido" value={apellido} onChange={e => setApellido(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Registrarse</button>
            </form>
            {mensaje && <p className="mensaje-error">{mensaje}</p>}
        </div>
    );
}
