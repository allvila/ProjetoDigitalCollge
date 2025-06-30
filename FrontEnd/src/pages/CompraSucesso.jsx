import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import confettiImg from '../assets/confete.png';

export default function CompraSucesso() {
  const navigate = useNavigate();
  const location = useLocation();
  const dados = location.state || {}; // fallback se atualizar página

  const {
    nome = '',
    cpf = '',
    email = '',
    celular = '',
    endereco = '',
    bairro = '',
    cidade = '',
    cep = '',
    complemento = '',
    metodoPagamento = '',
    cart = [],
    total = 0,
    titularCartao = '',
    finalCartao = '',
  } = dados;

  return (
    <div className="min-h-screen bg-[#F9F8FC] flex flex-col">
      <main className="flex-grow flex flex-col items-center py-12 px-4">
        <div className="bg-white rounded-xl shadow p-8 max-w-2xl w-full space-y-6 text-sm">
          <div className="text-center space-y-2">
            <img src={confettiImg} alt="Confete" className="mx-auto h-14" />
            <h1 className="text-xl font-bold text-gray-800">Compra Realizada com sucesso!</h1>
          </div>

          {/* INFORMAÇÕES PESSOAIS */}
          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">Informações Pessoais</h2>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>CPF:</strong> <span className="text-pink-600 font-semibold">{cpf}</span></p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Celular:</strong> {celular}</p>
          </section>

          {/* INFORMAÇÕES DE ENTREGA */}
          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">Informações de Entrega</h2>
            <p><strong>Endereço:</strong> {endereco}</p>
            <p><strong>Bairro:</strong> {bairro}</p>
            <p><strong>Cidade:</strong> {cidade}</p>
            <p><strong>CEP:</strong> {cep}</p>
            {complemento && <p><strong>Complemento:</strong> {complemento}</p>}
          </section>

          {/* INFORMAÇÕES DE PAGAMENTO */}
          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">Informações de Pagamento</h2>
            {metodoPagamento === 'cartao' && (
              <>
                <p><strong>Titular do Cartão:</strong> {titularCartao}</p>
                <p><strong>Final:</strong> ************{finalCartao}</p>
              </>
            )}
            {metodoPagamento === 'pix' && (
              <p>Pagamento realizado via <strong>Pix</strong>.</p>
            )}
            {metodoPagamento === 'boleto' && (
              <p>Pagamento realizado via <strong>Boleto</strong>.</p>
            )}
          </section>

          {/* RESUMO DA COMPRA */}
          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">Resumo da compra</h2>
            {cart.length > 0 ? (
              <div className="space-y-2">
                {cart.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-gray-100 rounded" />
                    <div>
                      <p className="font-medium text-sm">{item.nome}</p>
                      <p className="font-bold text-pink-600">
                        {item.quantidade}x R$ {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Nenhum item registrado.</p>
            )}
          </section>

          {/* TOTAL */}
          <div className="bg-orange-50 p-4 rounded flex justify-between items-center text-lg font-bold">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          <p className="text-xs text-right text-gray-500">ou 10x de R$ {(total / 10).toFixed(2)} sem juros</p>

          <button
            onClick={() => window.print()}
            className="text-sm underline text-center block mx-auto"
          >
            Imprimir Recibo
          </button>
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-3 rounded"
        >
          Voltar para Home
        </button>
      </main>

      <Footer />
    </div>
  );
}
