import React from 'react';
import camisa from '../assets/camisa.png';
import sapato from '../assets/sapato.png';
import fone from '../assets/fone.png';

export default function ColecoesEmDestaque() {
  return (
    <section className="secao-destaque">
      <h2 className="titulo-destaque">Coleções em destaque</h2>

      <div className="container-cards">
        <div className="card-destaque">
          <div className="selo-desconto">30% OFF</div>
          <img src={camisa} alt="Camisa" className="card-imagem img-camisa" />
          <div className="descricao-texto texto-camisa">
            Novo drop <br />Supreme
          </div>
          <div className="container-botao">
            <button className="botao-comprar">Comprar</button>
          </div>
        </div>

        <div className="card-destaque">
          <div className="selo-desconto">30% OFF</div>
          <img src={sapato} alt="Sapato" className="card-imagem img-sapato" />
          <div className="descricao-texto texto-sapato">
            Coleção<br />Adidas
          </div>
          <div className="container-botao">
            <button className="botao-comprar">Comprar</button>
          </div>
        </div>

        <div className="card-destaque">
          <div className="selo-desconto">30% OFF</div>
          <img src={fone} alt="Fone" className="card-imagem img-fone" />
          <div className="descricao-texto texto-fone">
            Novo Beats <br />Bass
          </div>
          <div className="container-botao">
            <button className="botao-comprar">Comprar</button>
          </div>
        </div>
      </div>
    </section>
  );
}


