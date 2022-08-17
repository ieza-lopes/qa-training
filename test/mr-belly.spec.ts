import http from "../common/http-methods"
import endpoints from "../common/endpoints.json";
import * as payload from "../auth/payload-auth";
import Auth from "../auth/functions-auth"

describe("Mr belly tests", () => {
    const auth = new Auth();

    beforeAll (async ()=> {
        await auth.tokenAuth();
    });
    
    it("login", async () => {
        const endpoint = endpoints.login
        const payloads  = payload.login(true);
        const res = await http.postAuth(endpoint, payloads)
        expect(res.statusCode).toEqual(200);
    })

    it("Get balance in account", async () => {
        const endpoint = endpoints.balance
        const res = await http.get(endpoint, auth.getToken())
        expect(res.statusCode).toEqual(200);
    })
})