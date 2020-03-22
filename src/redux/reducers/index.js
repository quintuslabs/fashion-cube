import { combineReducers } from "redux";
import login from "./LoginReducer";
import department from "./DepartmentReducer";
import product from "./productReducer";
// import variant from './variantsReducer'
// import cart from './cartReducer'
// import checkout from './checkoutReducer'
// import filter from './filterReducer'

export default combineReducers({
  department,
  login,
  product
});
