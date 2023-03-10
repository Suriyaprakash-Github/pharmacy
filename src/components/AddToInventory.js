import React, { useRef, useContext } from "react";
import InventoryContext from "./store/inventory-context";

const AddToInventory = () => {
  const inventoryCtx = useContext(InventoryContext);

  const uniqueId = useRef();
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const quantity = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    // const medicineData = {
    //   uniqueId: uniqueId.current.value,
    //   name: name.current.value,
    //   description: description.current.value,
    //   price: price.current.value,
    //   quantity: quantity.current.value,
    // };

    inventoryCtx.addItem({
      uniqueId: uniqueId.current.value,
      name: name.current.value,
      description: description.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
    });

    uniqueId.current.value = "";
    name.current.value = "";
    description.current.value = "";
    price.current.value = "";
    quantity.current.value = "";
  };
  return (
    <>
      <div
        style={{
          width: "40vw",
          height: "auto",
          position: "absolute",
          top: "10vh",
          left: "30vw",
          border: "2px solid black",
          padding: "2rem",
        }}
      >
        <h1>Add To Inventory</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="uniqueID">Unique ID</label>
          <input id="uniqueId" type="text" ref={uniqueId} />

          <label htmlFor="name">Name of the Medicine</label>
          <input id="name" type="text" ref={name} />

          <label htmlFor="description">Description of Medicine</label>
          <input id="description" type="text" ref={description} />

          <label htmlFor="price">Price of Medicine</label>
          <input id="price" type="number" ref={price} />

          <label htmlFor="quantity">Quantity of the Medicine Available</label>
          <input id="quantity" type="number" ref={quantity} />

          <button type="submit">Add To Inventory</button>
        </form>
      </div>
    </>
  );
};

export default AddToInventory;
