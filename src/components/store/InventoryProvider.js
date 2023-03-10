import { useReducer } from "react";

import InventoryContext from "./inventory-context";

const defaultInventoryState = {
  items: [],
};

const inventoryReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    updatedItems = state.items.concat(action.item);

    fetch("https://eshop-24099-default-rtdb.firebaseio.com/inventory.json", {
      method: "PUT",
      body: JSON.stringify(updatedItems),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    const toRemove = state.items.findIndex((item) => item.id === action.id);
    state.items.splice(toRemove, 1);
    updatedItems = [...state.items];
    return {
      items: updatedItems,
    };
  }

  return defaultInventoryState;
};

const InventoryProvider = (props) => {
  const [inventoryState, dispatchInventoryAction] = useReducer(
    inventoryReducer,
    defaultInventoryState
  );

  const addItemToInventoryHandler = (item) => {
    dispatchInventoryAction({ type: "ADD", item: item });
  };

  const removeItemFromInventoryHandler = (id) => {
    dispatchInventoryAction({ type: "REMOVE", id: id });
  };

  const inventoryContext = {
    items: inventoryState.items,
    addItem: addItemToInventoryHandler,
    removeItem: removeItemFromInventoryHandler,
  };

  return (
    <InventoryContext.Provider value={inventoryContext}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
