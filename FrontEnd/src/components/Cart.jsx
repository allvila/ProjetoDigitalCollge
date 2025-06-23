import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // estados locais para cupom e CEP (demonstração)
  const [cupom, setCupom] = useState('');
  const [cep, setCep] = useState('');
  const desconto = cupom === 'DESCONTO30' ? 30 : 0; // 🔧 regra simples de exemplo
  const frete = cep.length === 8 ? 0 : 0; // 🔧 frete grátis como placeholder

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantidade, 0);
  const total = subtotal + frete - desconto;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-xl font-bold mb-6">Meu Carrinho</h1>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Coluna dos produtos */}
        <div className="lg:col-span-2 space-y-6">
          {cart.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={item.image || 'https://via.placeholder.com/100'}
                  alt={item.name}
                  className="w-24 h-24 object-cover border rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">Qtd: {item.quantidade}</p>
                </div>
                <div className="text-right text-sm font-medium">
                  R$ {(item.price * item.quantidade).toFixed(2)}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="block text-xs text-red-500 hover:underline mt-1"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Cupom e CEP */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Cupom */}
            <input
              type="text"
              value={cupom}
              onChange={(e) => setCupom(e.target.value)}
              placeholder="Insira seu cupom"
              className="border px-4 py-2 rounded"
            />
            <button className="bg-pink-500 text-white px-6 py-2 rounded" onClick={() => setCupom(cupom.trim())}>
              Aplicar
            </button>
            {/* CEP */}
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Insira seu CEP"
              className="border px-4 py-2 rounded"
            />
            <button className="bg-pink-500 text-white px-6 py-2 rounded" onClick={() => setCep(cep.trim())}>
              Calcular
            </button>
          </div>
        </div>

        {/* Coluna de resumo */}
        <div className="border rounded-lg p-6 shadow-md h-fit">
          <h2 className="text-lg font-bold mb-4">Resumo</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>R$ {subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Frete</span><span>R$ {frete.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Desconto</span><span>- R$ {desconto.toFixed(2)}</span></div>
            <div className="flex justify-between font-semibold text-pink-600 pt-3 border-t"><span>Total</span><span>R$ {total.toFixed(2)}</span></div>
          </div>
          <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded disabled:opacity-50" disabled={cart.length === 0}>
            Continuar
          </button>
        </div>
      </div>

      {/* Produtos relacionados */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Produtos Relacionados</h3>
          <Link to="/produtos" className="text-pink-500 text-sm">Ver todos →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((idx) => (
            <div key={idx} className="border p-4 rounded text-center">
              <div className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full mb-2 inline-block">30% OFF</div>
              <img src="https://via.placeholder.com/150" alt="Produto" className="w-full h-24 object-cover mb-2" />
              <p className="text-sm font-medium">Tênis K‑Swiss V8 - Masculino</p>
              <p className="text-xs line-through text-gray-400">R$ 200</p>
              <p className="text-pink-600 font-bold">R$ 100</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}