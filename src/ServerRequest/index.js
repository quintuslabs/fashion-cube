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
