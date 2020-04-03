/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import { login } from "../../ServerRequest";

export const userLogin = (email, password) => dispatch => {
  dispatch({
    type: LOGIN_BEGIN
  });
  return login(email, password)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      });

      return res;
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error }
      });

      throw error;
    });
};

export const insertToken = () => dispatch => {
  let token;
  if (localStorage.getItem("auth")) {
    token = JSON.parse(localStorage.getItem("auth"));
    dispatch({
      type: INSERT_TOKEN_SUCCESS,
      payload: token
    });
  } else {
    dispatch({
      type: INSERT_TOKEN_FAIL
    });
  }
};

export const LOGIN_BEGIN = "LOGIN_BEGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const INSERT_TOKEN_SUCCESS = "INSERT_TOKEN_SUCCESS";
export const INSERT_TOKEN_FAIL = "INSERT_TOKEN_FAIL";
