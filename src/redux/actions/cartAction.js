/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import API from "../../axios/API";
import Auth from "../../modules/Auth";

export const getCartByUserId = () => dispatch => {
  let userId = Auth.getUserId();
  dispatch({
    type: GET_CART_BY_USERID_BEGIN
  });
  return API({
    method: "GET",
    url: `users/${userId}/cart`
  })
    .then(res => {
      dispatch({
        type: GET_CART_BY_USERID_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_CART_BY_USERID_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const postCart = (productId, increase, decrease) => dispatch => {
  let userId = Auth.getUserId();
  dispatch({
    type: POST_CART_BEGIN
  });
  return API({
    method: "POST",
    url: `users/${userId}/cart`,
    data: {
      userId,
      productId,
      increase,
      decrease
    }
  })
    .then(res => {
      dispatch({
        type: POST_CART_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: POST_CART_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const POST_CART_BEGIN = "POST_CART_BEGIN";
export const POST_CART_SUCCESS = "POST_CART_SUCCESS";
export const POST_CART_FAIL = "POST_CART_FAIL";

export const GET_CART_BY_USERID_BEGIN = "GET_CART_BY_USERID_BEGIN";
export const GET_CART_BY_USERID_SUCCESS = "GET_CART_BY_USERID_SUCCESS";
export const GET_CART_BY_USERID_FAIL = "GET_CART_BY_USERID_FAIL";
