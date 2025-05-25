import React from 'react';
import nike from '../assets/nike.png';
import '../index.css';

const Hero = () => {
  const imageUrl = nike;

  return (
    <div className="hero-container" style={{ backgroundColor: '#f5f5f5', position: 'relative' }}>
      <div className="hero-image-container">
        <img
          src={imageUrl}
          alt="Nike Air Force 1"
          width="733.51"
          height="431.61"
          className="hero-image"
        />
      </div>
      <div className="oferta-texto-container" style={{ position: 'relative', left: '380px', top: '-318px', width: '510px', height:'352px', }}>
        <p style={{ color: '#FF9800', fontSize: '16px' }}>Melhores ofertas personalizadas</p>
        <h1 style={{ fontSize: '3em', fontWeight: 'bold', margin: '0.2em 0' }}>Queima de <span style={{ color: '#212121' }}>estoque Nike</span> 🔥</h1>
        <p style={{ color: '#757575', fontSize: '1em' }}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
        <button style={{ backgroundColor: '#E91E63', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', marginTop: '1em', cursor: 'pointer' }}>Ver Ofertas</button>
      </div>
    </div>
  );
};

export default Hero;