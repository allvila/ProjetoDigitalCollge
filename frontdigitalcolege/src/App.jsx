import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Login from './pages/Login';
import Navbar from './components/Header';
import Cart from './components/cart'; // ✅ Página do carrinho
import FinalizarCompra from './pages/FinalizarCompra'; // ✅ Etapa 2: Finalizar compra

import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar /> {/* ✅ Navbar visível em todas as páginas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrinho" element={<Cart />} /> {/* ✅ Etapa 1: Carrinho */}
          <Route path="/finalizar-compra" element={<FinalizarCompra />} /> {/* ✅ Etapa 2: Finalizar */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
