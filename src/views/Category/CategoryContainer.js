import {
  getAllProducts,
  applyFilters
} from "../../redux/actions/productAction";
import { connect } from "react-redux";
import Category from "./Category";
import { postCart } from "../../redux/actions/cartAction";

const mapStoreToProps = state => ({
  products: state.product.products,
  loading: state.product.loading
});
const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  applyFilters: filter_string => dispatch(applyFilters(filter_string)),
  postCart: productId => dispatch(postCart(productId))
});

export default connect(mapDispatchToProps)(Category);
