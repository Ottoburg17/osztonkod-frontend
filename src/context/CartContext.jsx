import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "./ToastContext";




// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const { showToast } = useToast();
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
  setCart((prev) => {
    const existing = prev.find((p) => p.slug === product.slug);

    if (existing) {
      showToast("A termék mennyisége növelve 🛒");
      return prev.map((p) =>
        p.slug === product.slug
          ? { ...p, qty: p.qty + 1 }
          : p
      );
    }

    showToast("A termék a kosárba került 🛒");
    return [...prev, { ...product, qty: 1 }];
  });
};


  const removeFromCart = (slug) =>
    setCart((prev) => prev.filter((item) => item.slug !== slug));

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
