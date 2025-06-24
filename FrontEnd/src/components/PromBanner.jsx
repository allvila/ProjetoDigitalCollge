import React from 'react';
import jordan from '../assets/jordan.png';
import esfera from '../assets/esfera.png';

function PromoBanner() {
  return (
    <section className="w-full bg-white flex items-center justify-center overflow-hidden py-10">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 relative">

        {/* Imagem e esfera */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <div className="relative w-fit h-fit flex items-center justify-center">
            {/* Esfera que cobre completamente o sapato */}
            <img
              src={esfera}
              alt="Esfera"
              className="absolute z-0 w-[868px] h-[749px] md:w-[900px] md:h-[900px] lg:w-[1000px] lg:h-[1000px] object-contain"
            />
            {/* Imagem do sapato */}
            <img
              src={jordan}
              alt="Air Jordan"
              className="relative z-10 w-[250px] md:w-[400px] lg:w-[573px] object-contain"
            />
          </div>
        </div>

        {/* Texto e botão */}
        <div className="w-full lg:w-1/2 z-20 flex flex-col items-start text-center lg:text-left">
          <span className="text-[#C92071] font-semibold text-sm mb-2">
            Oferta especial
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-bold text-[#1F1F1F] leading-tight">
            Air Jordan edição de <br className="hidden md:block" />
            colecionador
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <button className="bg-[#C92071] text-white w-full sm:w-[200px] h-[45px] rounded hover:bg-[#a0165d] transition mt-6">
            Ver Oferta
          </button>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;


