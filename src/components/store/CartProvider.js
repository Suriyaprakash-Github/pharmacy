import { useReducer } from "react";

import CartContext from "./inventory-context";

const defaultCartState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedCartItems;
    updatedCartItems = state.cartItems.concat(action.item);

    return {
      cartItems: updatedCartItems,
    };
  }

  if (action.type === "REMOVE") {
    let updatedCartItems;
    const toRemove = state.cartItems.findIndex((item) => item.id === action.id);
    state.items.splice(toRemove, 1);
    updatedCartItems = [...state.cartItems];
    return {
      items: updatedCartItems,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    cartItems: cartState.cartItems,
    addCartItem: addItemToCartHandler,
    removeCartItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
