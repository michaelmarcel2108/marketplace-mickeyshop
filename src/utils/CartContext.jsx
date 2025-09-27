import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id===product.id? {...i, qty:i.qty+1}:i);
      return [...prev, {...product, qty:1}];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev => prev.map(i => i.id===id? {...i, qty:Math.max(1,qty)}:i));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id!==id));
  };

  const totalQty = cart.reduce((s,it)=>s+it.qty,0);

  return <CartContext.Provider value={{cart, addToCart, updateQty, removeFromCart, totalQty}}>{children}</CartContext.Provider>
}

export const useCart = ()=>useContext(CartContext);
