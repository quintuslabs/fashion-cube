/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import API from "../../axios/API";

export const getDepartments = () => dispatch => {
  dispatch({
    type: GET_DEPARTMENTS_BEGIN
  });
  return API({
    method: "GET",
    url: "/departments"
  })
    .then(res => {
      dispatch({
        type: GET_DEPARTMENTS_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_DEPARTMENTS_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const GET_DEPARTMENTS_BEGIN = "GET_DEPARTMENTS_BEGIN";
export const GET_DEPARTMENTS_SUCCESS = "GET_DEPARTMENTS_SUCCESS";
export const GET_DEPARTMENTS_FAIL = "GET_DEPARTMENTS_FAIL";
