import React, { useContext, useEffect } from "react";
import InventoryContext from "./components/store/inventory-context";
import InventoryButton from "./components/InventoryButton";
import axios from "axios";

import "./App.css";
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
        console.log(res.data);
        res.data.map((item) => {
          const received = {
            uniqueId: item.uniqueId,
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
          };
          return inventoryCtx.addItem(received);
        });
      });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <InventoryProvider>
        <InventoryButton />
        <AddToInventory />
        <DisplayInventory />
      </InventoryProvider>
    </div>
  );
}

export default App;
