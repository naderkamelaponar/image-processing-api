// بسم الله الرحمن الرحيم
import app from "../../index";
import supertest from "supertest";
import routers from "../../routers";
describe("check the rouers /", function () {
    it("response.state toEqual 404", async function () {
        const response = await supertest(app).get("/ss");
        expect(response.status).toEqual(404);
    });
});
describe("Create a new Image", () => {
    it("Check the Image Params", async function () {
        const response = await supertest(app).get("/images?");
        expect(response.text).toContain("Input the Image Name");
    });
    it("Created new Image ", async function () {
        const response = await supertest(app).get(
            "/images?img=encenadaport.jpg&width=500&height=100&format=png"
        );
        expect(response.type).toBe("image/png");
    });
    it("Return the already processed Image ", async function () {
        const response = await supertest(app).get(
            "/images?img=encenadaport.jpg&width=500&height=100&format=png"
        );
        expect(response.type).toBe("image/png");
    });
});
