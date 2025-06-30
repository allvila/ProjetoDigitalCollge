import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro'; // ✅ Nova importação
import Navbar from './components/Header';
import Cart from './components/cart';
import FinalizarCompra from './pages/FinalizarCompra';
import CompraSucesso from './pages/CompraSucesso';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} /> {/* ✅ Nova rota */}
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/finalizar-compra" element={<FinalizarCompra />} />
          <Route path="/compra-sucesso" element={<CompraSucesso />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
