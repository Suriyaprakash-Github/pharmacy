import React, { useContext, useState } from "react";
import InventoryContext from "./store/inventory-context";
import CartContext from "./store/cart-context";
import Nav from "react-bootstrap/Nav";

const InventoryButton = (props) => {
  const inventoryCtx = useContext(InventoryContext);
  const cartCtx = useContext(CartContext);

  //   const numberOfInventoryItems = inventoryCtx.items.length;
  const numberOfCartItems = cartCtx.cartItems.length;
  console.log("cartitems", cartCtx.cartItems);
  console.log("inventoryItems", inventoryCtx.items);
  // const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Nav.Link
        style={{ color: "black", margin: "10px", display: "flex" }}
        // onClick={() => setModalShow(true)}
      >
        Inventory
        <div
          style={{
            marginLeft: "0.5rem",
            height: "1.5rem",
            width: "1.5rem",
            border: "1px solid #0275d8",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            color: "black",
          }}
        >
          {/* {numberOfInventoryItems} */}
        </div>
      </Nav.Link>
      {/* <Cart show={modalShow} onHide={() => setModalShow(false)} /> */}

      <Nav.Link
        style={{ color: "black", margin: "10px", display: "flex" }}
        // onClick={() => setModalShow(true)}
      >
        Cart
        <div
          style={{
            marginLeft: "0.5rem",
            height: "1.5rem",
            width: "1.5rem",
            border: "1px solid #0275d8",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            color: "black",
          }}
        >
          {numberOfCartItems}
        </div>
      </Nav.Link>
    </>
  );
};

export default InventoryButton;
