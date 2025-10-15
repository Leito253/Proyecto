import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "../Styles/login.css";

export default function LoginPage() {

    const handleGoogleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);

        // Guardar usuario en localStorage
        localStorage.setItem("usuario", JSON.stringify({
            nombre: decoded.name,
            email: decoded.email,
            imagen: decoded.picture,
            googleId: decoded.sub
          }));
          
          window.location.href = "/";
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
