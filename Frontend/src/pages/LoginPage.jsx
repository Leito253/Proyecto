import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "../Styles/login.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5072/api/Usuarios/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
            const error = await res.json();
            setMensaje(error.mensaje || "Email o contraseña incorrectos");
            return;
        }

        const data = await res.json();
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        localStorage.setItem("token", data.token);
        window.location.href = "/";
    };

    const handleGoogleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);

        localStorage.setItem("usuario", JSON.stringify({
            nombre: decoded.name,
            email: decoded.email,
            imagen: decoded.picture,
            googleId: decoded.sub
        }));

        window.location.href = "/";
    };

    const handleGoogleLoginError = () => {
        alert("No se pudo iniciar sesión con Google.");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Iniciar sesión</h1>

                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit">Iniciar sesión</button>
                </form>
                {mensaje && <p className="mensaje-error">{mensaje}</p>}

                <h2>o con Google</h2>
                <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={handleGoogleLoginError}
                />
            </div>
        </div>
    );
}
