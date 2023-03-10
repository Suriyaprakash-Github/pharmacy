import React, { useContext } from "react";
import InventoryContext from "./store/inventory-context";
import CartContext from "./store/cart-context";

const DisplayInventory = () => {
  const inventoryCtx = useContext(InventoryContext);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item) => {
    console.log(item);
    cartCtx.addCartItem(item);
  };

  const inventory = inventoryCtx.items.map((item) => (
    <div
      key={Math.random()}
      style={{ borderBottom: "2px solid gray", padding: "1rem" }}
    >
      <span style={{ border: "1px solid black", margin: "0.25rem" }}>
        Name of the Medicine: {item.name}
      </span>

      <span style={{ border: "1px solid black", margin: "0.25rem" }}>
        Price of the Medicine: {item.price}
      </span>
      <span style={{ border: "1px solid black", margin: "0.25rem" }}>
        Available Quantity: {item.quantity}
      </span>
      <button onClick={addToCartHandler(item)}>Add to Cart</button>
    </div>
  ));

  return (
    <>
      <div
        style={{
          width: "80vw",
          height: "auto",
          position: "absolute",
          top: "80vh",
          left: "10vw",
          border: "2px solid black",
          padding: "2rem",
        }}
      >
        <h1>Available medicines in Inventory</h1>
        {inventory}
      </div>
    </>
  );
};
export default DisplayInventory;
