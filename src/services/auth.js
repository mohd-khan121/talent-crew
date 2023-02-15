import axios from "axios";

class Auth {
  constructor() {
    this.token = " ";
    this.service = axios.create({
      baseURL: "https://www.googleapis.com",
      timeout: 1000,
      headers: { Accept: "application/json" },
    });
  }

  async login(email, password, cb = undefined) {
    var resource =
      "/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBJQflAGZ2_d6ZTeZW4rByaLXm7DLVH_s0";

    if (email == null || password == null) {
      throw `Enter valid email and password: ${email} => ${password}`;
    }

    var response = await this.service.post(resource, {
      email: email,
      password: password,
      returnSecureToken: true,
    });

    console.log("Login successful");
    this.token = response.data.idToken;
    if (cb != undefined) {
      cb(response);
    }
    return response;
  }

  async getAccountInfo(cb = undefined) {
    var resource =
      "/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyBJQflAGZ2_d6ZTeZW4rByaLXm7DLVH_s0";

    if (this.token == null) {
      throw `User not logged in yet ${this.token}`;
    }

    var response = await this.service.post(resource, {
      idToken: this.token,
    });

    console.log("Data fetch successful");
    if (cb != undefined) {
      cb(response);
    }
    return response;
  }
}

export default Auth;
