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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    if (!this.props.products) {
      this.props.getAllProducts();
    }
  }

  render() {
    const { products, departments, applyFilters } = this.props;
    return (
      <div>
        <HomeBanner />
        <CategoryBanner />
        {products ? (
          <NewArrivals products={products} departments={departments} />
        ) : null}
        <Benefit />
        <Advertisement />
        {products ? (
          <BestSeller products={products} departments={departments} />
        ) : null}
      </div>
    );
  }
}

export default Home;
