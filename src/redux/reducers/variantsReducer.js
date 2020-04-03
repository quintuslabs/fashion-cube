/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import {
  GET_VARIANTS_QUERY_BEGIN,
  GET_VARIANTS_QUERY_SUCCESS,
  GET_VARIANTS_QUERY_FAIL
} from "../actions/variantsAction";

const initialState = {
  variants: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VARIANTS_QUERY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_VARIANTS_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        variants: action.payload.data.variants
      };
    case GET_VARIANTS_QUERY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
