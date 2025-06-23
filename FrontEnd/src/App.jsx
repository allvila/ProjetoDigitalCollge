import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Login from './pages/Login';
import Navbar from './components/Navbar';

import { CartProvider } from './contexts/CartContext';
import Cart from './components/cart'; // ✅ Componente do carrinho

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar /> {/* ✅ Navbar visível em todas as páginas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrinho" element={<Cart />} /> {/* ✅ Página completa do carrinho */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
