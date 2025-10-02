import React, { useState } from "react";
import CartContext from "../context/CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
 console.log(cart.length);

  const addToCart = (item) => {
    const exist = cart.find((c) => c._id === item._id);
    if (exist) {
      setCart(
        cart.map((c) =>
          c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((c) =>
        c._id === id ? { ...c, quantity: c.quantity + 1 } : c
      )
    );
  };

  const decreaseQuantity = (id) => {
    const exist = cart.find((c) => c._id === id);
    if (exist.quantity === 1) {
      // ❌ remove if 0
      setCart(cart.filter((c) => c._id !== id));
    } else {
      setCart(
        cart.map((c) =>
          c._id === id ? { ...c, quantity: c.quantity - 1 } : c
        )
      );
    }
  };

  const removeFromCart = (id)=>{
    const remove = cart.filter(item => item._id !== id)
    setCart(remove)

  }

  const cartInfo = {
    cart,
    setCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  };

  return (
    <CartContext.Provider value={cartInfo}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
