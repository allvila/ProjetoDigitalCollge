import React from 'react';
import kSwiss from '../assets/k-Swiss.png';

const ProdutoCard = ({ showDiscount }) => {
  return (
    <div className="w-[292px] flex flex-col items-center relative">
      {showDiscount && (
        <div className="absolute top-4 left-4 bg-lime-100 text-lime-800 px-3 py-1 rounded-md text-sm font-semibold">
          30% OFF
        </div>
      )}
      <div
        className="w-[292px] h-[321px] flex items-center justify-center mb-2 relative overflow-hidden" // Adicionado overflow-hidden
      >
        {/* Elipse de fundo */}
        <div
          className="absolute w-[200%] h-[200%] rounded-full"
          style={{
            background: 'linear-gradient(to bottom, #4200FF, rgba(66, 0, 255, 0.1))',
            transform: 'scale(0.6) translate(-50%, -50%)',
            zIndex: -1, // Garante que a elipse fique atrás da imagem
          }}
        />
        <div className="w-full h-full flex items-center justify-center bg-white rounded-none">
          <img
            src={kSwiss}
            alt="K-Swiss"
            className="max-h-full object-contain mr-0"
            style={{ transform: 'rotate(-30deg) translateX(-20px)' }}
          />
        </div>
      </div>
      {/* Texto ajustado para corresponder à imagem */}
      <div className="w-full p-2 flex flex-col items-center">
        <div className="text-sm text-gray-500 w-full text-center mb-1">Tênis</div>
        <div className="font-normal text-base w-full text-center mb-1">K-Swiss V8 - Masculino</div>
        <div className="flex items-center justify-center w-full">
          <span className="line-through text-gray-400 mr-2">$200</span>
          <span className="font-bold text-black">$100</span>
        </div>
      </div>
    </div>
  );
};

const ProdutosEmAltaSection = () => {
  return (
    // Fundo total da página ou seção
    <div className="w-full bg-[#f9f9fb] py-8">
      {/* Container central */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-start">
        <div className="flex items-center justify-between w-full mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 pl-4">Produtos em alta</h2>
          <button
            className="text-sm font-medium text-gray-800 hover:text-rose-500 flex items-center h-9 leading-9 w-[122px]"
          >
            Ver todos <span className="ml-1">→</span>
          </button>
        </div>

        {/* Grid com duas linhas de 4 produtos */}
        <div className="grid grid-cols-1 gap-35 px-4 sm:grid-cols-2 lg:grid-cols-4">
          <ProdutoCard showDiscount={true} />
          <ProdutoCard showDiscount={true} />
          <ProdutoCard showDiscount={false} />
          <ProdutoCard showDiscount={false} />
          <ProdutoCard showDiscount={false} />
          <ProdutoCard showDiscount={false} />
          <ProdutoCard showDiscount={false} />
          <ProdutoCard showDiscount={false} />
        </div>
      </div>
    </div>
  );
};

export default ProdutosEmAltaSection;