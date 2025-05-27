import React from 'react';
import Jordan from './assets/Jordan.png';

export default function OfertaEspecial() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 bg-white">
      {/* Imagem com elipse */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        {/* Elipse */}
        <div className="absolute w-[400px] h-[400px] bg-[#4200FF80] rounded-full top-1/2 -translate-y-1/2 -z-10"></div>
        {/* Imagem */}
        <img src={jordan} alt="Air Jordan" className="max-w-[300px] md:max-w-[400px]" />
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 px-4 md:px-10 text-center md:text-left">
        <p className="text-[#C8008F] font-semibold">Oferta especial</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-2 leading-tight">
          Air Jordan edição de <br /> colecionador
        </h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <button className="mt-6 bg-[#C8008F] text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-700 transition">
          Ver Oferta
        </button>
      </div>
    </div>
  );
}