// بسم الله الرحمن الرحيم
import supertest from "supertest";
import app from "../index";
describe("check the landing page/", function () {
    it("response.type toBe text/html", async function () {
        const response = await supertest(app).get("/");
        expect(response.type).toBe("text/html");
    });
    it("response.state toEqual 200", async function () {
        const response = await supertest(app).get("/");
        expect(response.status).toBe(200);
    });
});
