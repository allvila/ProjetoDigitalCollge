import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import logo from '../assets/logo-header.svg';
import { Link } from 'react-router-dom'; // Importe o Link aqui

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

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="max-w-[993px] mx-auto px-6 py-6 flex flex-col">

        {/* Top Bar */}
        <div className="flex items-center justify-between w-full gap-6">

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
              <ShoppingCart className="w-6 h-6 text-pink-600" />
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-grow">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Actions (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-700 underline underline-offset-4">
              Cadastre-se
            </a>
            <button className="bg-[#e91e63] hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-md text-sm" style={{ width: '114px', height: '40px' }}>
              Entrar
            </button>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-pink-600" />
            </div>
          </div>
        </div>

        {/* Bottom Nav - Desktop */}
        <div className="hidden lg:block mt-4">
          <SecondaryNavbar />
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 bg-gray-50 rounded-md px-4 py-4 shadow space-y-6">
            <SecondaryNavbar isMobile />

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <a href="#" className="text-sm text-gray-700 underline underline-offset-4">
                Cadastre-se
              </a>
              <button className="bg-[#e91e63] hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-md text-sm">
                Entrar
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}