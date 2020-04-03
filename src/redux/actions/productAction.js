/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import API from "../../axios/API";

export const getAllProducts = () => dispatch => {
  dispatch({
    type: GET_ALL_PRODUCTS_BEGIN
  });
  return API({
    method: "GET",
    url: `/products`
  })
    .then(res => {
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_ALL_PRODUCTS_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const getProduct = id => dispatch => {
  dispatch({
    type: GET_PRODUCT_BEGIN
  });
  return API({
    method: "GET",
    url: `/products/${id}`
  })
    .then(res => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_PRODUCT_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const getProductsByCategory = c => dispatch => {
  dispatch({
    type: GET_PRODUCTS_BY_CATEGORY_BEGIN
  });
  return API({
    method: "GET",
    url: `/products?category=${c}`
  })
    .then(res => {
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const search = text => dispatch => {
  dispatch({
    type: SEARCH_BEGIN
  });
  return API({
    method: "GET",
    url: `/search?query=${text}`
  })
    .then(res => {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: SEARCH_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const applyFilters = filter_string => dispatch => {
  dispatch({
    type: APPLY_FILTERS_BEGIN
  });
  return API({
    method: "GET",
    url: `/products?${filter_string}`
  })
    .then(res => {
      dispatch({
        type: APPLY_FILTERS_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: APPLY_FILTERS_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const APPLY_FILTERS_BEGIN = "APPLY_FILTERS_BEGIN";
export const APPLY_FILTERS_SUCCESS = "APPLY_FILTERS_SUCCESS";
export const APPLY_FILTERS_FAIL = "APPLY_FILTERS_FAIL";

export const SEARCH_BEGIN = "SEARCH_BEGIN";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

export const GET_ALL_PRODUCTS_BEGIN = "GET_ALL_PRODUCTS_BEGIN";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAIL = "GET_ALL_PRODUCTS_FAIL";

export const GET_PRODUCT_BEGIN = "GET_PRODUCT_BEGIN";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";

export const GET_PRODUCTS_BY_CATEGORY_BEGIN = "GET_PRODUCTS_BY_CATEGORY_BEGIN";
export const GET_PRODUCTS_BY_CATEGORY_SUCCESS =
  "GET_PRODUCTS_BY_CATEGORY_SUCCESS";
export const GET_PRODUCTS_BY_CATEGORY_FAIL = "GET_PRODUCTS_BY_CATEGORY_FAIL";
