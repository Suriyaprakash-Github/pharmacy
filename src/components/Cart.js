import React, { useContext } from "react";
import CartContext from "./store/cart-context";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removeHandler = (item) => {
    cartCtx.removeItem(item);
  };

  const cartItems = cartCtx.cartItems.map((item) => (
    <div key={item.id + Math.random()} id={item.id}>
      {item.title} : {item.price}
      <Button onClick={removeHandler.bind(null, item)}>Remove</Button>
    </div>
  ));

  const total = cartCtx.cartItems.reduce((curNumber, item) => {
    return curNumber + Number(item.price);
  }, 0);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ diplsy: "flex" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <span>{cartItems} </span>
        </div>
        <div>
          <span>Total:</span>
          <span>{total}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
