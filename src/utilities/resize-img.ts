// بسم الله الرحمن الرحيم
//checked
import sharp from "sharp";
export async function resizeImage(
    imgName: string,
    imgWidth: number,
    imgHeight: number,
    newFormat: string
): Promise<string | unknown> {
    const fullName: string =
        imgName?.split(".")[0] + "_" + imgWidth + "_" + imgHeight + "." + newFormat;
    const newImg: string = process.cwd() + "/images/thumbnail/" + fullName;
    try {
        imgName = process.cwd() + "/images/" + imgName;

        await sharp(imgName)
            .resize({
                width: imgWidth as number,
                height: imgHeight as number,
            })
            .toFile(newImg);
    } catch (error) {
        return "Fatal Error";
    }
    return newImg;
}
