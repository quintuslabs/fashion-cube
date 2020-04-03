/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import {
  POST_CART_BEGIN,
  POST_CART_SUCCESS,
  POST_CART_FAIL,
  GET_CART_BY_USERID_BEGIN,
  GET_CART_BY_USERID_SUCCESS,
  GET_CART_BY_USERID_FAIL
} from "../actions/cartAction";

const initialState = {
  cart: {},
  loading: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_CART_BEGIN:
      return {
        ...state,
        loading: true,
        error: {}
      };
    case POST_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload.data.cart,
        loading: false
      };
    case POST_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      };
    case GET_CART_BY_USERID_BEGIN:
      return {
        ...state,
        loading: true,
        error: {}
      };
    case GET_CART_BY_USERID_SUCCESS:
      return {
        ...state,
        cart: action.payload.data.cart,
        loading: false
      };
    case GET_CART_BY_USERID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      };
    default:
      return state;
  }
};
