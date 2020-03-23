class Auth {
  constructor() {
    this.user_token = JSON.parse(localStorage.getItem("auth")) || {};
  }
  getToken() {
    return this.user_token.token;
  }
  getUserId() {
    return this.user_token.user_id;
  }

  getUserDetails() {
    return this.user_token;
  }

  setUserToken(new_token) {
    this.user_token = new_token;
    localStorage.setItem("auth", JSON.stringify(new_token));
  }
  logout() {
    localStorage.removeItem("auth");
  }
}
export default new Auth();
