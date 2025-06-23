import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css'; // Certifique-se de que Tailwind está aqui aa

// Importando imagens do slide
import nike from '../assets/nike.png';
import img2 from '../assets/home-slide-2.jpeg';
import img3 from '../assets/home-slide-3.jpeg';
import img4 from '../assets/home-slide-4.jpeg';
import img5 from '../assets/home-slide-5.jpeg';
import img6 from '../assets/home-slide-6.jpeg';
import img7 from '../assets/home-slide-7.jpeg';
import img8 from '../assets/home-slide-8.jpeg';

const Hero = () => {
  const images = [img2, img3, img4, img5, img6, img7, img8];
  const primaryColor = '#C92071';

  return (
    <div className="w-[1440px] h-[681px] mx-auto relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-full"
      >
        {/* Slide da Nike com texto */}
        <SwiperSlide>
          <div className="flex items-center justify-between w-full h-full px-10" style={{ backgroundColor: '#F5F5F5' }}>
            <div className="max-w-xl">
              <p className="text-yellow-500 font-semibold mb-2">
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

            <div className="w-[600px] h-[400px] flex items-center justify-center">
              <img
                src={nike}
                alt="Nike"
                className="w-full h-auto"
                style={{ transform: 'rotate(-15deg)', marginTop: '-40px' }}
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slides com imagens */}
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full flex justify-center items-center"
              style={{ backgroundColor: '#F5F5F5' }}
            >
              <img
                src={img}
                alt={`Slide ${idx + 2}`}
                className="w-[1440px] h-[681px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilizando a paginação do Swiper */}
      <style>
        {`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #ccc;
            opacity: 1;
            margin: 0 5px;
            border-radius: 9999px;
          }

          .swiper-pagination-bullet-active {
            background: ${primaryColor} !important;
          }

          .swiper-pagination {
            position: absolute;
            bottom: 15px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 10;
          }
        `}
      </style>
      <div
        className="absolute bottom-0 left-0 w-full h-10"
        style={{ backgroundColor: primaryColor }}
      ></div>
    </div>
  );
};

export default Hero;
// Teste