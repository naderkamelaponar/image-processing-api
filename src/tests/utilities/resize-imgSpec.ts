// بسم الله الرحمن الرحيم
//checked
import {resizeImage} from "../../utilities/resize-img";
import fs from "fs";
describe("Transform an Image Directly ", () => {
    beforeAll(() => {
        deletImage();
    });
    it("Should create a new Image", async () => {
        const originalImage: string = "fjord.jpg";
        const width: number = 49;
        const height: number = 49;
        const newFormat: string = "jpeg";
        const result: string | unknown = await resizeImage(originalImage, width, height, newFormat);

        expect(result).not.toMatch("Fatal Error");
    });
    afterAll(() => {
        deletImage();
    });
});
const deletImage = (): void => {
    const newImg: string = process.cwd() + "/images/thumbnail/fjord_49_49.jpeg";
    if (fs.existsSync(newImg)) {
        fs.unlinkSync(newImg);
    }
};
