import React, { Component } from "react";
import { login } from "../../ServerRequest";
import API from "../../axios/API";
import Auth from "../../modules/Auth";
import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import NewArrivals from "../../components/Products/NewArrivals";
import BestSeller from "../../components/Products/BestSeller";
import Benefit from "../../components/Benefit";
import Advertisement from "../../components/Advertisement";
import PropTypes from "prop-types";
import jumpTo from "../../modules/Navigation";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.addToBag = this.addToBag.bind(this);
  }

  componentDidMount() {
    if (!this.props.products) {
      this.props.getAllProducts();
    }
  }

  addToBag = params => {
    let cart = this.props.postCart(params);
    cart.then(res => {
      console.log(res);
      // window.location.reload();
    });
  };

  render() {
    const { products, departments } = this.props;
    return (
      <div>
        <HomeBanner />
        <CategoryBanner />
        {products ? (
          <NewArrivals
            products={products}
            departments={departments}
            addToBag={this.addToBag}
          />
        ) : null}
        <Benefit />
        <Advertisement />
        {products ? (
          <BestSeller
            products={products}
            departments={departments}
            addToBag={this.addToBag}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
