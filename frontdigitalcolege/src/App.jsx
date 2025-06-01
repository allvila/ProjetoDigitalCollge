import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProdutosPage from './pages/Produtos';
import Login from './pages/Login'; // <--- 1. VERIFIQUE SE ESTA IMPORTAÇÃO ESTÁ AQUI

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/login" element={<Login />} /> {/* <--- 2. VERIFIQUE SE ESTA ROTA FOI ADICIONADA */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;