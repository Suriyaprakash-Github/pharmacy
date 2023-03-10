import React, { useContext, useEffect } from "react";
import InventoryContext from "./components/store/inventory-context";
import InventoryButton from "./components/InventoryButton";
import axios from "axios";

import "./App.css";
import AddToCart from "./components/AddToCart";
import AddToInventory from "./components/AddToInventory";
import DisplayInventory from "./components/DisplayInventory";
import InventoryProvider from "./components/store/InventoryProvider";

function App() {
  const inventoryCtx = useContext(InventoryContext);

  useEffect(() => {
    axios
      .get(`https://eshop-24099-default-rtdb.firebaseio.com/inventory.json`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        res.data.map((item) => {
          return inventoryCtx.addItem({
            uniqueId: item.value,
            name: item.value,
            description: item.value,
            price: item.value,
            quantity: item.value,
          });
        });
      });
  });
  return (
    <div style={{ display: "flex" }}>
      <InventoryProvider>
        <InventoryButton />
        <AddToInventory />
        <DisplayInventory />
        <AddToCart />
      </InventoryProvider>
    </div>
  );
}

export default App;
