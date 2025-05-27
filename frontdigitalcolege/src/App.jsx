import Header from './components/Header';
import Hero from './components/Hero';
import ColecoesEmDestaque from './components/ColecoesEmDestaque';
import ColecoesDestaqueCategorias from './components/ColecoesDestaqueCategorias'; 
import ProdutosEmAlta from './components/ProdutosEmAlta';
import OfertaEspecial from './components/OfertaEspecial'; // Importa a exportação padrão (renomeada) e a exportação nomeada
import React from 'react';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <div className="bg-white">
        <ColecoesEmDestaque /> {/* Usando o componente de produtos (exportação padrão renomeada) */}
       {/* Usando o componente de categorias (exportação nomeada) */}
       <ColecoesDestaqueCategorias />
       
       <ProdutosEmAlta /> {/* Usando o componente de produtos em alta */}
       <OfertaEspecial /> {/* Usando o componente de oferta especial */}
      </div>
    </main>
  );
}