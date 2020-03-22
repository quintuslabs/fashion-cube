import {
  getAllProducts,
  applyFilters
} from "../../redux/actions/productAction";
import { connect } from "react-redux";
import Home from "./Home";
const mapStoreToProps = state => ({
  products: state.product.products,
  departments: state.department.departments,
  loading: state.product.loading
});
const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  applyFilters: filter_string => dispatch(applyFilters(filter_string))
});

export default connect(mapStoreToProps, mapDispatchToProps)(Home);
