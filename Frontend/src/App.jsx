import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import LibroDetalle from "./pages/LibroDetalle";
import Categorias from "./pages/Categorias";
import Buscar from "./pages/Buscar";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import './Styles/App.css';

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={usuario ? <PaginaPrincipal /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/libro/:id" element={<LibroDetalle />} />
        <Route path="/categoria" element={<Categorias />} />
        <Route path="/buscar" element={<Buscar />} />
      </Routes>
    </Router>
  );
}

export default App;
