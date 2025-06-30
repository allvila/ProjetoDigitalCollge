// src/pages/FinalizarCompra.jsx

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { CartContext } from '../contexts/CartContext';

export default function FinalizarCompra() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formDados, setFormDados] = useState({
    nome: '', cpf: '', email: '', celular: '',
    endereco: '', bairro: '', cidade: '', cep: '', complemento: '',
    numeroCartao: '', nomeCartao: '', validade: '', cvv: ''
  });
  const [metodoPagamento, setMetodoPagamento] = useState('cartao');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDados({ ...formDados, [name]: value });
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantidade, 0);
  const frete = subtotal > 0 ? 0 : 0;
  const desconto = subtotal > 0 ? 30 : 0;
  const total = subtotal - desconto + frete;

  const handlePagamento = () => {
    if (!formDados.nome || !formDados.email || cart.length === 0) {
      alert('Preencha o formulário e adicione ao menos um item ao carrinho.');
      return;
    }

    const dadosCompra = {
      pessoais: {
        nome: formDados.nome,
        cpf: formDados.cpf,
        email: formDados.email,
        celular: formDados.celular,
      },
      entrega: {
        endereco: formDados.endereco,
        bairro: formDados.bairro,
        cidade: formDados.cidade,
        cep: formDados.cep,
      },
      pagamento: {
        titular: formDados.nomeCartao,
        finalCartao: formDados.numeroCartao.slice(-4).padStart(16, '*'),
      },
      produto: cart[0] || {},
      total: total,
    };

    navigate('/compra-sucesso', { state: dadosCompra });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8FC]">
      <main className="flex-grow p-8 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl">
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-xl shadow space-y-10">
            <h2 className="text-2xl font-bold">Finalizar Compra</h2>

            <section>
              <h3 className="text-lg font-semibold border-b pb-2 mb-6">Informações Pessoais</h3>
              <div className="grid grid-cols-1 gap-6">
                {[['nome', 'Nome Completo'], ['cpf', 'CPF'], ['email', 'E-mail'], ['celular', 'Celular']].map(([name, label]) => (
                  <label key={name} className="block">
                    <span className="text-sm font-medium text-gray-700">{label} *</span>
                    <input name={name} value={formDados[name]} onChange={handleChange} className="mt-1 w-full bg-gray-100 p-3 rounded-md" placeholder={label} />
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold border-b pb-2 mb-6">Informações de Entrega</h3>
              <div className="grid grid-cols-1 gap-6">
                {[['endereco', 'Endereço'], ['bairro', 'Bairro'], ['cidade', 'Cidade'], ['cep', 'CEP'], ['complemento', 'Complemento']].map(([name, label]) => (
                  <label key={name} className="block">
                    <span className="text-sm font-medium text-gray-700">
                      {label} {label !== 'Complemento' && '*'}
                    </span>
                    <input name={name} value={formDados[name]} onChange={handleChange} className="mt-1 w-full bg-gray-100 p-3 rounded-md" placeholder={label} />
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold border-b pb-2 mb-6">Informações de Pagamento</h3>

              <div className="flex gap-6 mb-6">
                {['cartao', 'pix', 'boleto'].map((tipo) => (
                  <label key={tipo} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="pagamento"
                      value={tipo}
                      checked={metodoPagamento === tipo}
                      onChange={() => setMetodoPagamento(tipo)}
                    />
                    {tipo === 'cartao' && 'Cartão de Crédito'}
                    {tipo === 'pix' && 'Pix'}
                    {tipo === 'boleto' && 'Boleto'}
                  </label>
                ))}
              </div>

              {metodoPagamento === 'cartao' && (
                <div className="grid grid-cols-1 gap-6">
                  {[['numeroCartao', 'Número do Cartão'], ['nomeCartao', 'Nome no Cartão'], ['validade', 'Validade (MM/AA)'], ['cvv', 'CVV']].map(([name, label]) => (
                    <label key={name} className="block">
                      <span className="text-sm font-medium text-gray-700">{label} *</span>
                      <input name={name} value={formDados[name]} onChange={handleChange} className="mt-1 w-full bg-gray-100 p-3 rounded-md" placeholder={label} />
                    </label>
                  ))}
                </div>
              )}

              {metodoPagamento === 'pix' && (
                <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700">
                  Ao finalizar, um QR Code será gerado para pagamento imediato via Pix.
                </div>
              )}

              {metodoPagamento === 'boleto' && (
                <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700">
                  O boleto será gerado e enviado para o seu e-mail após finalizar o pedido.
                </div>
              )}
            </section>
          </div>

          <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow h-fit space-y-6">
            <h2 className="text-lg font-bold">Resumo do Pedido</h2>

            {cart.length > 0 ? (
              <div className="space-y-2 text-sm">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{item.quantidade}x {item.nome}</span>
                    <span>R$ {(item.price * item.quantidade).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">Nenhum item no carrinho.</p>
            )}

            <div className="text-sm space-y-1 pt-2 border-t">
              <div className="flex justify-between"><span>Subtotal:</span><span>R$ {subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Frete:</span><span>R$ {frete.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Desconto:</span><span>- R$ {desconto.toFixed(2)}</span></div>
            </div>

            <div className="flex justify-between text-lg font-bold bg-orange-50 p-3 rounded">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>

            <p className="text-xs text-gray-500 text-right">
              ou 10x de R$ {(total / 10).toFixed(2)} sem juros
            </p>

            <button
              onClick={handlePagamento}
              disabled={cart.length === 0}
              className={`w-full ${
                cart.length === 0
                  ? 'bg-yellow-200 cursor-not-allowed'
                  : 'bg-[#f7a823] hover:bg-yellow-500'
              } text-white font-semibold py-3 rounded`}
            >
              Realizar Pagamento
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
