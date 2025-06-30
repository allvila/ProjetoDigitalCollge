import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function CartPage() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [cupom, setCupom] = useState('');
  const [cep, setCep] = useState('');
  const [desconto, setDesconto] = useState(0);
  const [frete, setFrete] = useState(0);
  const [mensagemCupom, setMensagemCupom] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantidade, 0);
  const total = subtotal - desconto + frete;

  const aplicarCupom = () => {
    if (cupom.trim().toUpperCase() === 'DESCONTO10') {
      const valorDesconto = subtotal * 0.1;
      setDesconto(valorDesconto);
      setMensagemCupom('Cupom aplicado com sucesso!');
    } else {
      setDesconto(0);
      setMensagemCupom('Cupom inválido.');
    }
  };

  const calcularFrete = () => {
    if (cep.trim().startsWith('1')) {
      setFrete(0);
    } else {
      setFrete(20);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8FC]">
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-xl font-semibold mb-6">Meu Carrinho</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Lado Esquerdo */}
          <div className="flex-1 space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-500">Seu carrinho está vazio.</p>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="Insira seu cupom"
                    className="border rounded px-4 py-2"
                    value={cupom}
                    onChange={(e) => setCupom(e.target.value)}
                  />
                  <button
                    onClick={aplicarCupom}
                    className="bg-pink-500 hover:bg-pink-600 text-white rounded px-4 py-2"
                  >
                    Aplicar
                  </button>
                  <input
                    placeholder="Insira seu CEP"
                    className="border rounded px-4 py-2"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                  <button
                    onClick={calcularFrete}
                    className="bg-pink-500 hover:bg-pink-600 text-white rounded px-4 py-2"
                  >
                    Calcular
                  </button>
                </div>
                {mensagemCupom && (
                  <p className={`text-sm ${desconto > 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {mensagemCupom}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Lado Direito */}
          <div className="w-full lg:w-1/3 bg-white p-6 border rounded shadow">
            <h2 className="text-lg font-bold mb-4">Resumo</h2>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete:</span>
                <span>R$ {frete.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Desconto:</span>
                <span>- R$ {desconto.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-pink-600">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/finalizar-compra')}
              disabled={cart.length === 0}
              className={`mt-6 w-full py-3 rounded text-white font-semibold ${
                cart.length === 0
                  ? 'bg-yellow-200 cursor-not-allowed'
                  : 'bg-yellow-500 hover:bg-yellow-600'
              }`}
            >
              Continuar
            </button>
          </div>
        </div>

        {/* Produtos relacionados */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold mb-4">Produtos Relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border rounded p-4 text-center">
                <div className="h-32 bg-gray-100 mb-2" />
                <span className="text-xs text-green-600 font-bold">30% OFF</span>
                <p className="text-sm font-medium mt-1">Produto</p>
                <p className="text-xs line-through text-gray-400">R$ 200</p>
                <p className="text-pink-600 font-bold">R$ 100</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
