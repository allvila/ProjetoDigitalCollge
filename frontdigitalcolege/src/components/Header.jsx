import React, { useState } from 'react';
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";

function SecondaryNavbar() {
  return (
    <div className="w-full flex justify-start mt-2">
          <ul className="flex space-x-6" style={{ width: '423px', height: '29px' }}>
            <li><a href="#" className="text-gray-700 hover:text-pink-500 font-semibold">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-500">Produtos</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-500">Categorias</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-500">Meus Pedidos</a></li>
          </ul>
        </div>)
}

export default function Header() {
  const digitalColegeColor = '#e91e63';
  const [entrarClicked, setEntrarClicked] = useState(false);

  const handleEntrarClick = () => {
    setEntrarClicked(true);
    setTimeout(() => {
      setEntrarClicked(false);
    }, 200); // Tempo para a mudança de cor (ajuste conforme necessário)
  };

  const entrarButtonClass = `text-white px-4 py-2 rounded focus:outline-none border-none ${
    entrarClicked ? 'bg-purple-700' : 'bg-[#e91e63] hover:bg-pink-600'
  }`;

  return (
    <header className="bg-white shadow-sm" style={{ height: '192px' }}>
      <div className="container mx-auto px-6 flex flex-col justify-center items-center h-full" style={{ maxWidth: '993px', height: '129px' }}>
        <div className="flex items-center justify-between w-full">
          {/* Logo "Digital Colege" */}
          <div className="flex items-center font-bold" style={{ width: '212px' }}>
            <div className="bg-[#e91e63] text-white rounded-md flex items-center justify-center w-8 h-8 relative">
              <span className="text-[1.1rem] absolute left-[2px] top-[0px]">{'>'}</span>
              <span className="text-[1rem] absolute left-[6px] bottom-[1px]">{'_'}</span>
            </div>
            <span className="ml-2 font-semibold" style={{ color: digitalColegeColor }}>Digital Colege</span>
          </div>

          {/* Barra de Pesquisa */}
          <div className="flex-grow mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-pink-300 border-pink-200"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 bg-transparent border-none p-0 cursor-pointer">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Links da Direita */}
          <div className="flex items-center space-x-4">
            <a href="#" className={`text-gray-600`}>Cadastre-se</a>
            <button
              className={entrarButtonClass}
              style={{ width: '114px', height: '40px' }}
              onClick={handleEntrarClick}
            >
              Entrar
            </button>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Secondary Navbar dentro do Header */}
        <div className="w-full flex justify-start mt-2">
          <SecondaryNavbar />
        </div>
      </div>
    </header>
  );
}