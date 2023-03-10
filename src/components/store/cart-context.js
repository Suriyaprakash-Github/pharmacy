import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  addCartItem: (item) => {},
  removeCartItem: (id) => {},
});

export default CartContext;
