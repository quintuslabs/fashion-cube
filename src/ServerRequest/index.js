/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import API from "../axios/API";
import Auth from "../modules/Auth";

export const login = async (email, password) => {
  const body = {
    credential: {
      email: email,
      password: password
    }
  };
  return await API({
    method: "POST",
    url: "/users/login",
    data: body
  }).then(res => {
    Auth.setUserToken(res.data.user_token);
    return res;
  });
};
export const register = async (fullname, email, password, verifyPassword) => {
  return await API({
    method: "POST",
    url: "/users/signin",
    data: {
      fullname,
      email,
      password,
      verifyPassword
    }
  }).then(res => {
    // Auth.setUserToken(res.data.user_token);
    console.log(res);
    return res;
  });
};
