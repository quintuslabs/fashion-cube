/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import jumpTo from "../../modules/Navigation";

function SingleProduct(props) {
  const { productItem } = props;
  return (
    <div className="product-item men">
      <div
        className="product discount product_filter"
        onClick={() =>
          jumpTo(`/fashion-cube/single-product/${productItem._id}`)
        }
      >
        <div className="product_image">
          <img src={productItem.imagePath} alt="" className="img-fluid" />
        </div>
        <div className="favorite favorite_left">
          <i className="far fa-heart"></i>
        </div>
        {/* <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
          <span>-$20</span>
        </div> */}
        <div className="product_info">
          <h6 className="product_name">
            <div>{productItem.title}</div>
          </h6>
          <div className="product_price">
            ₹ {productItem.price}
            <span> ₹ {(parseFloat(productItem.price) + 30).toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div
        className="red_button add_to_cart_button"
        onClick={() => props.addToBag(productItem._id)}
      >
        <div style={{ color: "#ffffff" }}>add to cart</div>
      </div>
    </div>
  );
}

export default SingleProduct;
