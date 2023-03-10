import React from "react";

const InventoryContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default InventoryContext;
