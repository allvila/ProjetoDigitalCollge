import React, { useState, useContext } from 'react';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import logo from '../assets/logo-header.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function SecondaryNavbar({ isMobile = false }) {
  return (
    <ul className={`flex flex-col lg:flex-row ${isMobile ? 'space-y-4' : 'space-x-6'} text-sm font-medium`}>
      <li>
        <Link to="/" className="text-pink-600 border-b-2 border-pink-600 pb-1">Home</Link>
      </li>
      <li>
        <Link to="/produtos" className="text-gray-700 hover:text-pink-500">Produtos</Link>
      </li>
      <li>
        <Link to="/categorias" className="text-gray-700 hover:text-pink-500">Categorias</Link>
      </li>
      <li>
        <Link to="/meus-pedidos" className="text-gray-700 hover:text-pink-500">Meus Pedidos</Link>
      </li>
    </ul>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantidade, 0);

  /** Cart dropdown reused for mobile + desktop */
  const CartDropdown = () => (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border z-50">
      {/* Header */}
      <h2 className="text-base font-semibold px-6 pt-5 pb-3 border-b border-gray-100">Meu Carrinho</h2>

      {/* Lista de itens */}
      <div className="max-h-96 overflow-y-auto px-6 pt-3">
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">O carrinho está vazio.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-3 border-b py-3">
              <img
                src={item.image || 'https://via.placeholder.com/100'}
                alt={item.name}
                className="w-14 h-14 object-contain border rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold line-clamp-2 leading-snug">{item.name}</p>
                <p className="text-sm text-gray-500">R$ {(item.price * item.quantidade).toFixed(2)}</p>
                <p className="text-xs text-gray-400 line-through">R$ {(item.price + 50).toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:underline">Remover</button>
            </div>
          ))
        )}
      </div>

      {/* Rodapé — sempre visível */}
      <div className="px-6 py-4 border-t">
        <div className="flex justify-between text-sm mb-2 font-medium">
          <span>Valor total:</span>
          <span className="text-pink-600 font-semibold">R$ {total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={clearCart}
            disabled={cart.length === 0}
            className={`text-xs underline ${cart.length === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-gray-800'}`}
          >
            Esvaziar
          </button>
          <Link to="/carrinho">
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-pink-700">Ver Carrinho</button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-sm w-full relative z-50">
      <div className="max-w-[993px] mx-auto px-6 py-6 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between w-full gap-6">
          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex-grow flex justify-center lg:justify-start items-center">
            <img src={logo} alt="Logo Digital Store" className="h-6 md:h-7 lg:h-8" />
          </div>

          {/* Actions (Mobile) */}
          <div className="lg:hidden flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-700" />
            <div className="relative">
              <button onClick={() => setShowCart(!showCart)}>
                <ShoppingCart className="w-6 h-6 text-pink-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cart.length}</span>
                )}
              </button>
              {showCart && <CartDropdown />}
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-grow">
            <div className="relative w-full max-w-xl">
              <input type="text" placeholder="Pesquisar produto..." className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-sm" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"><Search className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Actions (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-700 underline underline-offset-4">Cadastre-se</a>
            <Link to="/login">
              <button className="bg-[#e91e63] hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-md text-sm" style={{ width: '114px', height: '40px' }}>Entrar</button>
            </Link>
            <div className="relative">
              <button onClick={() => setShowCart(!showCart)}>
                <ShoppingCart className="w-6 h-6 text-pink-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cart.length}</span>
                )}
              </button>
              {showCart && <CartDropdown />}
            </div>
          </div>
        </div>

        {/* Bottom Nav - Desktop */}
        <div className="hidden lg:block mt-4"><SecondaryNavbar /></div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 bg-gray-50 rounded-md px-4 py-4 shadow space-y-6">
            <SecondaryNavbar isMobile />
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <a href="#" className="text-sm text-gray-700 underline underline-offset-4">Cadastre-se</a>
              <Link to="/login"><button className="bg-[#e91e63] hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-md text-sm">Entrar</button></Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
