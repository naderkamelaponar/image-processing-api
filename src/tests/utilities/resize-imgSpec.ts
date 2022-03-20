import {resizeImage} from "../../utilities/resize-img";
it("should return new image", async () => {
    const newImg = await resizeImage("fjord.jpg", 150, 150, "jpg");
    expect(newImg).toBe(process.cwd() + "/images/cache/fjord_150_150.jpg");
});
