import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Login from './pages/Login';
import Navbar from './components/Navbar';


import { CartProvider } from './contexts/CartContext';

import Cart from './components/cart';  // ✅ IMPORTA O COMPONENTE DO CARRINHO

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrinho" element={<Cart />} />  {/* ✅ NOVA ROTA DO CARRINHO */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
  function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />   {/* ✅ AQUI */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

}

export default App;
