/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import API from "../../axios/API";

export const getVariantsByProductId = productId => dispatch => {
  dispatch({
    type: GET_VARIANTS_QUERY_BEGIN
  });
  return API({
    method: "GET",
    url: `/variants?productId=${productId}`
  })
    .then(res => {
      dispatch({
        type: GET_VARIANTS_QUERY_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_VARIANTS_QUERY_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const GET_VARIANTS_QUERY_BEGIN = "GET_VARIANTS_QUERY_BEGIN";
export const GET_VARIANTS_QUERY_SUCCESS = "GET_VARIANTS_QUERY_SUCCESS";
export const GET_VARIANTS_QUERY_FAIL = "GET_VARIANTS_QUERY_FAIL";
