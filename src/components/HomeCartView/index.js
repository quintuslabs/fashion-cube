/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./style.css";
import Auth from "../../modules/Auth";
import EmptyCart from "../../assets/images/emptyCart.png";
import jumpTo from "../../modules/Navigation";
class HomeCartView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToChechout = () => {
    jumpTo("/fashion-cube/cart");
  };
  render() {
    const { items, totalPrice } = this.props.cart;
    console.log(totalPrice);

    return (
      <Modal {...this.props} className="right">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
          {items !== undefined && items !== null ? (
            <span className="checkout--btn" onClick={() => this.goToChechout()}>
              checkout{" "}
            </span>
          ) : null}
        </Modal.Header>
        <Modal.Body className="modal-body-content">
          {Auth.getUserDetails() !== undefined &&
          Auth.getUserDetails() !== null &&
          Auth.getToken() !== undefined ? (
            <div>
              {items !== undefined && items !== null ? null : (
                <div className="empty--basket">
                  <img src={EmptyCart} className="img-fluid" />
                  <h4 style={{ textAlign: "center" }}>Empty cart</h4>
                </div>
              )}
            </div>
          ) : (
            <div className="empty--basket">
              <h4>Please login to view cart</h4>
              <img src={EmptyCart} className="img-fluid" />
            </div>
          )}

          {items !== undefined &&
            items !== null &&
            Object.keys(items).map((id) => {
              return (
                <div key={id} className="basket--item">
                  <div className="basket--item--img">
                    <img src={items[id].item.imagePath} alt="" />
                  </div>
                  <div className="basket--item--details">
                    <div className="basket--item--title">
                      {items[id].item.title}
                    </div>
                    <div className="basket--item--quantity">
                      Quantity: <span>{items[id].qty}</span>
                    </div>
                    <div className="basket--item--price">
                      {" "}
                      Price: <span>₹{items[id].price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          {items !== undefined && items !== null && (
            <div className="total--price-container">
              <h3 style={{ textAlign: "center" }}>
                Total: <span style={{ color: "#FE4C50" }}>₹{totalPrice}</span>{" "}
              </h3>
              <button
                className="btn btn-wide log-btn"
                style={{ marginTop: 20 }}
                onClick={() => this.goToChechout()}
              >
                Checkout
              </button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    );
  }
}

export default HomeCartView;
