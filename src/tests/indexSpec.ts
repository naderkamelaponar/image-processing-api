// بسم الله الرحمن الرحيم
//checked
import supertest from "supertest";
import app from "../index";
describe("check the landing page/", () => {
    it("response.type toBe text/html", async () => {
        const response = await supertest(app).get("/");
        expect(response.type).toBe("text/html");
    });
    it("response.state toEqual 200", async () => {
        const response = await supertest(app).get("/");
        expect(response.status).toBe(200);
    });
});
