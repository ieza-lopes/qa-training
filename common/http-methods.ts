import request from "supertest";
import * as dotenv from "dotenv";

dotenv.config();

class HttpMethods {
  static async get(
    endpoint: string,
    token: string,
    baseUrl = process.env.BASE_URL
  ) {
    return request(baseUrl)
      .get(endpoint)
      .set("Authorization", `JWT ${token}`);
  }

  static async postAuth(
    endpoint: string,
    payload: object,
    baseUrl = process.env.BASE_URL
  ) {
    return request(baseUrl).post(endpoint).send(payload);
  }

  static async post(
    endpoint: string,
    payload: object,
    token: string,
    baseUrl = process.env.BASE_URL
  ){
    return request(baseUrl)
    .post(endpoint)
    .send(payload)
    .set("Authorization", `JWT ${token}`);
  }
}
export default HttpMethods;
