import { connect } from "react-redux";
import NavBar from "./NavBar";
import { getDepartments } from "../../redux/actions/DepartmentAction";
import { getCartByUserId } from "../../redux/actions/cartAction";
const mapStoreToProps = state => ({
  departments: state.department.departments,
  cart: state.cart.cart
});

const mapDispatchToProps = dispatch => ({
  getDepartments: dispatch(getDepartments()),
  getCartByUserId: () => dispatch(getCartByUserId())
});

export default connect(mapStoreToProps, mapDispatchToProps)(NavBar);
