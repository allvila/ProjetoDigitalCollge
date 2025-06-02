import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantidade, 0);

  return (
    <div className="p-4 w-full max-w-md bg-white border rounded shadow-md">
      <h2 className="text-xl font-bold border-b pb-2 mb-4">Resumo</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 mb-4">O carrinho está vazio.</p>
      ) : (
        <ul className="mb-4">
          {cart.map(item => (
            <li key={item.id} className="mb-3 flex items-center">
              {item.image && (
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-3 rounded" />
              )}
              <div className="flex-1">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-sm">Qtd: {item.quantidade}</p>
                <p className="text-sm font-semibold">R$ {(item.price * item.quantidade).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Área fixa com total e ações */}
      <div className="border-t pt-3">
        <div className="flex justify-between text-sm font-semibold mb-3">
          <span>Valor total:</span>
          <span className="text-pink-600">R$ {total.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={clearCart}
            disabled={cart.length === 0}
            className="text-sm text-gray-500 hover:underline disabled:text-gray-300"
          >
            Esvaziar
          </button>
          <Link
            to="/produtos"
            className="bg-pink-500 text-white text-sm px-3 py-1 rounded hover:bg-pink-600 transition"
          >
            Ver Produtos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
