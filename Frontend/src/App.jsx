import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import LibroDetalle from "./pages/LibroDetalle";
import Categorias from "./pages/Categorias";
import Buscar from "./pages/Buscar";
import CuentaPage from "./pages/CuentaPage";
import Login from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import SobreNosotros from "./pages/SobreNosotros";
import './Styles/App.css';

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");

  return (
    <Router>
      {usuario && <Navbar />}
      <Routes>
        <Route path="/" element={usuario ? <PaginaPrincipal /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/libro/:id" element={usuario ? <LibroDetalle /> : <Navigate to="/login" />} />
        <Route path="/categoria" element={usuario ? <Categorias /> : <Navigate to="/login" />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/cuenta" element={usuario ? <CuentaPage /> : <Navigate to="/login" />} />
        <Route path="/buscar" element={usuario ? <Buscar /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
