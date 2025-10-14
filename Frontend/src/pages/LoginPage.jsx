import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwt_decode }from "jwt-decode";
import "../Styles/login.css";

export default function LoginPage() {
    const navigate = useNavigate();

    const handleGoogleLoginSuccess = (credentialResponse) => {
        const decoded = jwt_decode(credentialResponse.credential);

        // Guardar usuario en localStorage
        localStorage.setItem("usuario", JSON.stringify({
            nombre: decoded.name,
            email: decoded.email,
            imagen: decoded.picture,
            googleId: decoded.sub
        }));

        navigate("/"); // Redirige a la página principal
    };

    const handleGoogleLoginError = () => {
        console.error("Error en inicio de sesión con Google");
        alert("No se pudo iniciar sesión con Google.");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Iniciar sesión</h1>
                <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={handleGoogleLoginError}
                />
            </div>
        </div>
    );
}
