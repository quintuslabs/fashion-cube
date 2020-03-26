import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./style.css";
class HomeCartView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { items } = this.props.cart;

    return (
      <Modal {...this.props} className="right">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-content">
          {Object.keys(items).map(id => {
            return <div key={id}>{items[id].item.title}</div>;
          })}
        </Modal.Body>
      </Modal>
    );
  }
}

export default HomeCartView;
