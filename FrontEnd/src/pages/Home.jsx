import React from 'react';
import Hero from '../components/Hero';
import ColecoesEmDestaque from '../components/ColecoesEmDestaque';
import ColecoesDestaqueCategorias from '../components/ColecoesDestaqueCategorias';
import ProdutosEmAlta from '../components/ProdutosEmAlta';
import PromBanner from '../components/PromBanner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import mantido

export default function Home() {
  const backgroundColor = '#F5F5F5'; // Cor de fundo da imagem

  return (
    <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden" style={{ backgroundColor }}>
      {/* Header REMOVIDO daqui — já está no App.jsx */}
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Hero />
      </div>
      
      <div className="bg-white">
        <ColecoesEmDestaque />
        <ColecoesDestaqueCategorias />
        <ProdutosEmAlta />
      </div>
      
      <PromBanner />
      <Footer />
    </main>
  );
}
