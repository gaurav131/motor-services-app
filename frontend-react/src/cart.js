import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Cart(props) {
  return (
    <>
      <Modal show={props.show} onHide={()=>props.handleCartButton('closing')}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>List of items you added in the cart
        <ul>
          {props.cartItems.map((item)=><li>{item.name} service date: {item.date}</li>)}
        </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" id='closing' onClick={(e) => props.handleCartButton(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>props.handleCartButton(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart