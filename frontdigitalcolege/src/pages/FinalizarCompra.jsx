import React, { useState } from 'react';

export default function FinalizarCompra() {
  const [metodoPagamento, setMetodoPagamento] = useState('cartao');

  return (
    <div className="min-h-screen bg-[#F9F8FC] p-8 flex flex-col gap-10 lg:flex-row lg:justify-center">
      
      {/* FORMULÁRIOS */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-xl shadow space-y-8">
        <h2 className="text-2xl font-bold">Finalizar Compra</h2>

        {/* INFORMAÇÕES PESSOAIS */}
        <section>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Informações Pessoais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="Nome Completo *" />
            <input className="input" placeholder="CPF *" />
            <input className="input" placeholder="E-mail *" />
            <input className="input" placeholder="Celular *" />
          </div>
        </section>

        {/* INFORMAÇÕES DE ENTREGA */}
        <section>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Informações de Entrega</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="Endereço *" />
            <input className="input" placeholder="Bairro *" />
            <input className="input" placeholder="Cidade *" />
            <input className="input" placeholder="CEP *" />
            <input className="input" placeholder="Complemento" />
          </div>
        </section>

        {/* INFORMAÇÕES DE PAGAMENTO */}
        <section>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Informações de Pagamento</h3>
          
          {/* MÉTODOS DE PAGAMENTO */}
          <div className="flex gap-4 mb-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="pagamento" value="cartao" checked={metodoPagamento === 'cartao'} onChange={() => setMetodoPagamento('cartao')} />
              Cartão de Crédito
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="pagamento" value="pix" checked={metodoPagamento === 'pix'} onChange={() => setMetodoPagamento('pix')} />
              Pix
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="pagamento" value="boleto" checked={metodoPagamento === 'boleto'} onChange={() => setMetodoPagamento('boleto')} />
              Boleto
            </label>
          </div>

          {/* CAMPOS POR MÉTODO */}
          {metodoPagamento === 'cartao' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input" placeholder="Número do Cartão *" />
              <input className="input" placeholder="Nome no Cartão *" />
              <input className="input" placeholder="Validade (MM/AA) *" />
              <input className="input" placeholder="CVV *" />
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

      {/* RESUMO DO PEDIDO */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow h-fit space-y-4">
        <h2 className="text-lg font-bold">Resumo do Pedido</h2>

        <div className="text-sm space-y-1">
          <div className="flex justify-between"><span>Subtotal:</span><span>R$ 219,00</span></div>
          <div className="flex justify-between"><span>Frete:</span><span>R$ 0,00</span></div>
          <div className="flex justify-between"><span>Desconto:</span><span>- R$ 30,00</span></div>
        </div>

        <div className="flex justify-between text-lg font-bold bg-orange-50 p-3 rounded">
          <span>Total</span>
          <span>R$ 219,00</span>
        </div>

        <p className="text-xs text-gray-500 text-right">ou 10x de R$ 21,00 sem juros</p>

        <button className="w-full bg-[#f7a823] hover:bg-yellow-500 text-white font-semibold py-3 rounded">
          Realizar Pagamento
        </button>
      </div>
    </div>
  );
}
