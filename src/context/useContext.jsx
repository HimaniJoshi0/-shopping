import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

 

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);



  return (
    <CartContext.Provider
      value={{ cartItems, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
