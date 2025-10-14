import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5072/api/usuarios/login', {
        email,
        password
      });
      localStorage.setItem('token', res.data.token); 
      navigate('/home'); 
    } catch (err) {
      alert('Usuario o contraseña incorrectos');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;