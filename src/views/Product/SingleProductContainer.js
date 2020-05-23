/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import { connect } from "react-redux";
import SingleProduct from "./SingleProduct";
import { getProduct } from "../../redux/actions/productAction";
import { getVariantsByProductId } from "../../redux/actions/variantsAction";
import { postCart } from "../../redux/actions/cartAction";

const mapStoreToProps = (state) => ({
  product: state.product.product,
  variants: state.variant.variants,
});
const mapDispatchToProps = {
  getProduct,
  getVariantsByProductId,
  postCart,
};

export default connect(mapStoreToProps, mapDispatchToProps)(SingleProduct);
