/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import LoginRegister from "../../components/LoginRegisterModal";
import Auth from "../../modules/Auth";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      size: "",
      pic: "",
      selectedSize: "",
      id: "",
      quantity: 1,
      modalShow: false,
      login: true,
    };
  }
  componentDidMount() {
    this.props.getProduct(this.props.location.pathname.split("/").slice(-1)[0]);
    this.props.getVariantsByProductId(
      this.props.location.pathname.split("/").slice(-1)[0]
    );
  }

  showHideModal = () => {
    this.setState({ modalShow: false });
  };

  loginClicked = () => {
    this.setState({ modalShow: true, login: true });
  };
  registerClicked = () => {
    this.setState({ modalShow: true, login: false });
  };

  handleThumbnailClick = (item) => {
    this.setState({
      color: item.color,
      size: item.size,
      pic: item.imagePath,
      selectedSize: "",
      id: item._id,
      cartItem: null,
    });
  };

  onAddClicked = () => {
    this.setState({ quantity: this.state.quantity + 1 });
    this.props.postCart(
      this.state.id || this.props.location.pathname.split("/").slice(-1)[0],
      true,
      false
    );
  };
  onRemoveClicked = () => {
    this.props.postCart(
      this.state.id || this.props.location.pathname.split("/").slice(-1)[0],
      false,
      true
    );

    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  addToBag = () => {
    if (
      Auth.getUserDetails() !== undefined &&
      Auth.getUserDetails() !== null &&
      Auth.getToken() !== undefined
    ) {
      this.props
        .postCart(
          this.state.id || this.props.location.pathname.split("/").slice(-1)[0]
        )
        .then((res) => {
          console.log(res);
        });
    } else {
      this.setState({ modalShow: true });
    }
  };

  productInCart = () => {
    let available = false;
    // let items = this.props.cart.items;
    // if (items !== undefined && items !== null) {
    //   let itemCheck = Object.keys(items).map(
    //     id => items[id].item.title === this.props.product.title
    //   );

    //   if (itemCheck !== undefined && itemCheck !== null) {
    //     this.setState({ cartItem: itemCheck });
    //     available = true;
    //   } else {
    //     available = false;
    //   }
    // }

    return available;
  };

  render() {
    console.log(this.props);
    return (
      <div className="container single_product_container">
        {this.props.product && (
          <div>
            <div className="row">
              <div className="col">
                <div className="breadcrumbs d-flex flex-row align-items-center">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        {this.props.product.department}
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        {this.props.product.category}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7">
                <div className="single_product_pics">
                  <div className="row">
                    <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                      <div className="single_product_thumbnails">
                        <ul>
                          {this.props.variants &&
                            this.props.variants
                              .slice(0, 4)
                              .map((item, index) => (
                                <li
                                  key={index}
                                  onClick={() =>
                                    this.handleThumbnailClick(item)
                                  }
                                >
                                  <img
                                    src={item.imagePath}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </li>
                              ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-9 image_col order-lg-2 order-1">
                      <div className="single_product_image">
                        <div
                          className="single_product_image_background"
                          style={{
                            backgroundImage: `url(${
                              this.state.pic || this.props.product.imagePath
                            })`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="product_details">
                  <div className="product_details_title">
                    <h2>{this.props.product.title}</h2>
                    <p>{this.props.product.description}</p>
                  </div>
                  <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                    <span>
                      <i className="fas fa-truck"></i>
                    </span>
                    <span>free delivery</span>
                  </div>
                  <div className="original_price">
                    {" "}
                    ₹ {(parseFloat(this.props.product.price) + 30).toFixed(2)}
                  </div>
                  <div className="product_price">
                    ₹ {this.props.product.price}
                  </div>
                  <ul className="star_rating">
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <div className="product_color">
                    <span>Select Color:</span>
                    <ul>
                      <li style={{ background: "#e54e5d" }}></li>
                      <li style={{ background: "#252525" }}></li>
                      <li style={{ background: "#60b3f3" }}></li>
                    </ul>
                  </div>
                  <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                    <span>Quantity:</span>

                    <div className="quantity_selector">
                      <span
                        className={
                          this.state.quantity > 1 ? "minus" : "minus disabled"
                        }
                        onClick={() => this.onRemoveClicked()}
                      >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </span>
                      <span id="quantity_value">{this.state.quantity}</span>
                      <span
                        className="plus"
                        onClick={() => this.onAddClicked()}
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </span>
                    </div>

                    <div
                      className="red_button product-add_to_cart_button"
                      onClick={this.addToBag}
                    >
                      <a href="#">add to cart</a>
                    </div>

                    {/* <div className="red_cart_button product_add_to_cart_icon">
                      <a href="#">
                        <i className="fas fa-cart-arrow-down"></i>
                      </a>
                    </div> */}

                    <div className="product_favorite d-flex flex-column align-items-center justify-content-center">
                      <i className="far fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <LoginRegister
          show={this.state.modalShow}
          login={this.state.login}
          registerClicked={() => this.registerClicked()}
          loginClicked={() => this.loginClicked()}
          onHide={() => this.showHideModal()}
        />
      </div>
    );
  }
}

export default SingleProduct;
