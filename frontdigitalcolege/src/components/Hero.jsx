import React from 'react';
import nike from '../assets/nike.png';
import '../index.css';

const Hero = () => {
  const imageUrl = nike;

  return (
    <section className="w-full bg-gray-50 py-20" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-[993px] mx-auto px-6 flex items-center"> {/* Usando a mesma max-w e removendo justify-between */}
        <div className="max-w-xl">
          <p className="text-yellow-500 font-semibold mb-2" style={{ color: '#F59E0B' }}>
            Melhores ofertas personalizadas
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            Queima de <br /> estoque Nike <span className="inline-block">🔥</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
          </p>
          <button className="bg-pink-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-pink-700 transition">
            Ver Ofertas
          </button>
        </div>

        <div className="relative w-[600px] h-[400px] flex items-center justify-center"> {/* Centralizei a imagem */}
          <img
            src={imageUrl}
            alt="Nike"
            className="w-full h-auto"
            style={{ transform: 'rotate(-15deg)', marginTop: '-40px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


