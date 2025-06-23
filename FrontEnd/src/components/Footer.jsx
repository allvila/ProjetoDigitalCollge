import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logofooter from '../assets/logo-footer.svg'; // Importa a logo

function Footer() {
  const footerBackgroundColor = '#1F1F1F';

  return (
    <footer className="text-gray-300 py-12" style={{ backgroundColor: footerBackgroundColor }}>
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Coluna 1: Logo e Descrição */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={logofooter}
              alt="Logo Drip Store"
              className="mr-2"
              style={{ width: '212px', height: '44px' }}
            />
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Coluna 2: Informação */}
        <div>
          <h6 className="text-sm font-semibold text-white mb-4">Informação</h6>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Sobre Drip Store</a></li>
            <li><a href="#" className="hover:text-white">Segurança</a></li>
            <li><a href="#" className="hover:text-white">Wishlist</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Trabalhe conosco</a></li>
            <li><a href="#" className="hover:text-white">Meus Pedidos</a></li>
          </ul>
        </div>

        {/* Coluna 3: Categorias */}
        <div>
          <h6 className="text-sm font-semibold text-white mb-4">Categorias</h6>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Camisetas</a></li>
            <li><a href="#" className="hover:text-white">Calças</a></li>
            <li><a href="#" className="hover:text-white">Bonés</a></li>
            <li><a href="#" className="hover:text-white">Headphones</a></li>
            <li><a href="#" className="hover:text-white">Tênis</a></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h6 className="text-sm font-semibold text-white mb-4">Contato</h6>
          <address className="text-sm text-gray-400 not-italic space-y-2">
            <div>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza -</div>
            <div>CE, 60150-161</div>
            <div>(85) 3051-3411</div>
          </address>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mt-8 text-center text-xs text-gray-500">
        @ 2022 Digital Collage
      </div>
    </footer>
  );
}

export default Footer;
