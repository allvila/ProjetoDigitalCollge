import React from 'react';
import Header from '../components/Header';
import ProdutosFiltrados from '../components/ProdutosFiltrados';
import Footer from '../components/Footer';

function ProdutosPage() {
  // Dados de exemplo dos seus produtos (substitua pelos seus dados reais)
  const produtos = [
    { id: 1, nome: 'Tênis Adidas X', marca: 'Adidas', categoria: 'Esporte e lazer', genero: 'Masculino', estado: 'Novo' },
    { id: 2, nome: 'Camiseta K-Swiss Y', marca: 'K-Swiss', categoria: 'Casual', genero: 'Feminino', estado: 'Usado' },
    { id: 3, nome: 'Calça Adidas Z', marca: 'Adidas', categoria: 'Esporte e lazer', genero: 'Masculino', estado: 'Novo' },
    { id: 4, nome: 'Jaqueta K-Swiss W', marca: 'K-Swiss', categoria: 'Utilitário', genero: 'Feminino', estado: 'Novo' },
    { id: 5, nome: 'Tênis Nike Air', marca: 'Nike', categoria: 'Esporte e lazer', genero: 'Unisex', estado: 'Novo' },
    { id: 6, nome: 'Puma Classic', marca: 'Puma', categoria: 'Casual', genero: 'Masculino', estado: 'Usado' },
    { id: 7, nome: 'Calenciaga Street', marca: 'Calenciaga', categoria: 'Casual', genero: 'Feminino', estado: 'Novo' },
    { id: 8, nome: 'Tênis para Corrida Nike', marca: 'Nike', categoria: 'Corrida', genero: 'Masculino', estado: 'Novo' },
    // ... mais produtos
  ];

  return (
    <div>
      <Header />
      <ProdutosFiltrados produtos={produtos} />
      <Footer />
    </div>
  );
}

export default ProdutosPage;