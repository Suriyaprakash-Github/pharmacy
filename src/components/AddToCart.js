import React, { useContext } from "react";
import InventoryContext from "./store/inventory-context";
const AddToCart = () => {
  const inventoryCtx = useContext(InventoryContext);

  return (
    <>
      <div>
        <h1>This is add to cart</h1>
      </div>
    </>
  );
};

export default AddToCart;
