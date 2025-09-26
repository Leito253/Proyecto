import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import LibroDetalle from "./pages/LibroDetalle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/libro/:id" element={<LibroDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
