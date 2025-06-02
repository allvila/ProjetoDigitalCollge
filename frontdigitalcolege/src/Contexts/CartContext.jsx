import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /** Adiciona item ao carrinho */
  const addToCart = (produto) => {
    setCart((prevCart) => {
      const itemExistente = prevCart.find((item) => item.id === produto.id);
      const quantidadeAdicional = produto.quantidade || 1;

      if (itemExistente) {
        // soma a quantidade se o item já existe
        return prevCart.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidadeAdicional }
            : item
        );
      }

      // adiciona novo item
      return [...prevCart, { ...produto, quantidade: quantidadeAdicional }];
    });
  };

  /** Remove item pelo id */
  const removeFromCart = (produtoId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== produtoId));
  };

  /** Esvazia todo o carrinho */
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
