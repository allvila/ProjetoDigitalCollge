    import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Navbar() {
  const { cart } = useContext(CartContext);

  // Contador total de itens
  const totalItems = cart.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="font-bold text-xl">Minha Loja</Link>

      <div className="flex items-center space-x-4">
        <Link to="/produtos">Produtos</Link>
        <Link to="/login">Login</Link>

        <Link to="/carrinho" className="relative">
          <FaShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
