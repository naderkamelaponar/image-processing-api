import sharp from "sharp";
export function resizeImage(
    imgName: string,
    imgWidth: number,
    imgHeight: number,
    newFormat: string
): string {
    const fullName: string =
        imgName?.split(".")[0] + "_" + imgWidth + "_" + imgHeight + "." + newFormat;
    const newImg: string = process.cwd() + "/images/thumbnail/" + fullName;
    try {
        imgName = process.cwd() + "/images/" + imgName;

        sharp(imgName)
            .resize({
                width: imgWidth as number,
                height: imgHeight as number,
            })
            .toFile(newImg);
    } catch (error) {
        console.log(error);
    }
    return newImg;
}
