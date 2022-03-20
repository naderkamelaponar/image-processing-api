// بسم الله الرحمن الرحيم
import app from "../../index";
import supertest from "supertest";
import routers from "../../routers";
describe("check the rouers /", function () {
    it("response.state toEqual 404", async function () {
        const response = await supertest(app).get("/ss");
        expect(response.status).toEqual(404);
    });
    it("should ask for image name", async function () {
        const response = await supertest(app).get("/images?");
        expect(response.text).toContain("Input the Image Name");
    });
});
