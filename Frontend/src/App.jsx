import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import LibroDetalle from "./pages/LibroDetalle";
import Navbar from "./components/Navbar";
import Categorias from "./pages/Categorias";
import './Styles/App.css';
import Buscar from "./pages/Buscar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/libro/:id" element={<LibroDetalle />} />
        <Route path="/categoria" element={<Categorias />} />
        <Route path="/buscar" element={<Buscar />} />
      </Routes>
    </Router>
  );
}

export default App;
