import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../Styles/Login.css";

export default function Login() {
    const navigate = useNavigate();

    const handleGoogleLoginSuccess = (response) => {
        const decoded = jwtDecode(response.credential);

        localStorage.setItem("usuario", JSON.stringify({
            nombre: decoded.name,
            email: decoded.email,
            imagen: decoded.picture,
            googleId: decoded.sub
        }));

        navigate("/");
    };

    const handleGoogleLoginError = () => {
        console.error("Error en inicio de sesión con Google");
        alert("No se pudo iniciar sesión con Google.");
    };

    return (
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <div className="google-login">
                <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={handleGoogleLoginError}
                />
            </div>
        </div>
    );
}
