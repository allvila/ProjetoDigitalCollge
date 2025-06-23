import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';

function ProdutoCard({ produto }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded">
      {/* Imagem do produto */}
      <img src={produto.image} alt={produto.name} className="w-full h-40 object-cover" />

      {/* Nome do produto */}
      <h3 className="mt-2 font-bold">{produto.name}</h3>

      {/* Preço com duas casas decimais */}
      <p className="text-gray-700">R$ {produto.price.toFixed(2)}</p>

      {/* Botão de adicionar ao carrinho */}
      <button
        onClick={() => addToCart({ ...produto, quantidade: 1 })}
        className="mt-2 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded flex items-center justify-center"
      >
        <FaShoppingCart className="inline mr-2" />
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProdutoCard;
