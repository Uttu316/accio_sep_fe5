import { createContext, useState } from "react";

//step 1
export const CartContext = createContext();

//step2
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((currCart) => [...currCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((currCart) => currCart.filter((i) => i.id !== id));
  };

  const isInCart = (id) => {
    return cart.find((i) => i.id === id);
  };

  const cartLength = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLength,
        addToCart,
        removeFromCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
