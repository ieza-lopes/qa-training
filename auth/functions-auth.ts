import * as dotenv from "dotenv";
import http from "../common/http-methods";
import * as payload from "./payload-auth";
import endpoints from "../common/endpoints.json";

dotenv.config();

class Auth {
  private token!: string;

  public getToken() {
    return this.token;
  }

  public async tokenAuth() {
    const endpoint = endpoints.login;
    const payloads = payload.login(true);
    const res = await http.postAuth(endpoint, payloads);
    this.token = res.body.token;
  }
}

export default Auth;
