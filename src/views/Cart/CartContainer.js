/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import { connect } from "react-redux";
import Cart from "./Cart";
import { getCartByUserId, postCart } from "../../redux/actions/cartAction";

const mapStoreToProps = (state) => ({
  cart: state.cart.cart,
});
const mapDispatchToProps = (dispatch) => ({
  getCartByUserId: dispatch(getCartByUserId()),
  postCart: (pid, increase, decrease) =>
    dispatch(postCart(pid, increase, decrease)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);
