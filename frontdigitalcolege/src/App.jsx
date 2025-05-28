import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProdutosPage from './pages/Produtos';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        {/* Adicione outras rotas para Categorias, Meus Pedidos, etc., aqui */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;