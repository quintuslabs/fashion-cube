import React, { Component } from "react";
class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getProduct(this.props.location.pathname.split("/").slice(-1)[0]);
    this.props.getVariantsByProductId(
      this.props.location.pathname.split("/").slice(-1)[0]
    );
  }

  render() {
    console.log(this.props);
    return (
      <div class="container single_product_container">
        <div class="row">
          <div class="col">
            <div class="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="categories.html">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>Men's
                  </a>
                </li>
                <li class="active">
                  <a href="#">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>Single
                    Product
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-7">
            <div class="single_product_pics">
              <div class="row">
                <div class="col-lg-3 thumbnails_col order-lg-1 order-2">
                  <div class="single_product_thumbnails">
                    <ul>
                      <li>
                        <img
                          src="images/single_1_thumb.jpg"
                          alt=""
                          data-image="images/single_1.jpg"
                        />
                      </li>
                      <li class="active">
                        <img
                          src="images/single_2_thumb.jpg"
                          alt=""
                          data-image="images/single_2.jpg"
                        />
                      </li>
                      <li>
                        <img
                          src="images/single_3_thumb.jpg"
                          alt=""
                          data-image="images/single_3.jpg"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-9 image_col order-lg-2 order-1">
                  <div class="single_product_image">
                    <div
                      class="single_product_image_background"
                      // style={{"background-image:url(images/single_2.jpg)"}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="product_details">
              <div class="product_details_title">
                <h2>Pocket cotton sweatshirt</h2>
                <p>
                  Nam tempus turpis at metus scelerisque placerat nulla
                  deumantos solicitud felis. Pellentesque diam dolor, elementum
                  etos lobortis des mollis ut...
                </p>
              </div>
              <div class="free_delivery d-flex flex-row align-items-center justify-content-center">
                <span class="ti-truck"></span>
                <span>free delivery</span>
              </div>
              <div class="original_price">$629.99</div>
              <div class="product_price">$495.00</div>
              <ul class="star_rating">
                <li>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </li>
              </ul>
              <div class="product_color">
                <span>Select Color:</span>
                <ul>
                  <li style={{ background: "#e54e5d" }}></li>
                  <li style={{ background: "#252525" }}></li>
                  <li style={{ background: "#60b3f3" }}></li>
                </ul>
              </div>
              <div class="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                <span>Quantity:</span>
                <div class="quantity_selector">
                  <span class="minus">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </span>
                  <span id="quantity_value">1</span>
                  <span class="plus">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="red_button product-add_to_cart_button">
                  <a href="#">add to cart</a>
                </div>
                <div class="product_favorite d-flex flex-column align-items-center justify-content-center">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
