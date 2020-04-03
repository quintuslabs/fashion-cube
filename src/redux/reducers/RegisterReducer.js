/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import {
  POST_REGISTER_BEGIN,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAIL
} from "../actions/RegisterAction";

const initialState = {
  register_loading: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER_BEGIN:
      return {
        ...state,
        register_loading: true
      };
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        register_loading: false
      };
    case POST_REGISTER_FAIL:
      return {
        ...state,
        register_loading: false,
        error: action.payload.error.response.data
      };
    default:
      return state;
  }
};
