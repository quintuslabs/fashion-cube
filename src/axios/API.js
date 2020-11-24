/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import Auth from "../modules/Auth";
import jumpTo from "../modules/Navigation";
import axios from "axios";
//const URL = "http://192.168.0.19:3000";
const URL = "http://192.168.43.45:3000";

const API = (config) => {
  //header authorization
  if (Auth.user_token) {
    const token = Auth.getToken();
    config.headers = {
      authorization: token,
    };
  }
  //interceptors handle network error
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: "net work error",
          status: 500,
        };
      }
      if (error.response.status === 401) {
        Auth.logout();
        // jumpTo("/login");
        throw error;
      }
      return Promise.reject(error);
    }
  );
  config.baseURL = URL;
  return axios(config);
};
export default API;
