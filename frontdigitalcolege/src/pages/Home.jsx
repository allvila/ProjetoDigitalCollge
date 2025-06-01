import Header from '../components/Header';
import Hero from '../components/Hero';
import ColecoesEmDestaque from '../components/ColecoesEmDestaque';
import ColecoesDestaqueCategorias from '../components/ColecoesDestaqueCategorias';
import ProdutosEmAlta from '../components/ProdutosEmAlta';
import PromBanner from '../components/PromBanner';
import Footer from '../components/Footer';
import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

export default function Home() {
  const backgroundColor = '#F5F5F5'; // Cor de fundo da imagem

  return (
    <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden" style={{ backgroundColor: backgroundColor }}>
      <Header>
        <Link to="/login">
          <button>Entrar</button>
        </Link>
      </Header>
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