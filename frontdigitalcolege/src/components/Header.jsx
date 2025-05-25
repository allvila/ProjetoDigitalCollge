import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';

function SecondaryNavbar() {
  return (
    <div className="w-full flex justify-start mt-3">
      <ul className="flex space-x-6 text-sm font-medium">
        <li>
          <a href="#" className="text-pink-600 border-b-2 border-pink-600 pb-1">Home</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-pink-500">Produtos</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-pink-500">Categorias</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-pink-500">Meus Pedidos</a>
        </li>
      </ul>
    </div>
  );
}

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[993px] mx-auto px-6 py-6 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between w-full gap-6">
          {/* Logo */}
          <div className="flex items-center font-bold">
            <div className="bg-[#e91e63] text-white rounded-md flex items-center justify-center w-8 h-8 relative">
              <span className="text-[1.1rem] absolute left-[2px] top-[0px]">{'>'}</span>
              <span className="text-[1rem] absolute left-[6px] bottom-[1px]">{'_'}</span>
            </div>
            <span className="ml-2 font-semibold text-[1.25rem]" style={{ color: '#e91e63' }}>
              Digital Store
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full max-w-xl bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
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

        {/* Bottom Nav */}
        <SecondaryNavbar />
      </div>
    </header>
  );
}
