import express, {Application} from "express";
import {resizeImage} from "../../utilities/resize-img";
export const imageProcess = (req: express.Request, res: express.Response): void => {
    const {img, width, height, format} = req.query;
    const imgWidth: number | null = width ? parseInt(width as string, 10) : null;
    const imgHeight: number | null = height ? parseInt(height as string, 10) : null;
    const imgName: string | null = img ? (img as string) : null;
    const imgFormat: string | null = format ? (format as string) : "jpg";
    console.log("Proccesing the Image");
    const newImg: string = resizeImage(
        imgName as string,
        imgWidth as number,
        imgHeight as number,
        imgFormat as string
    );

    setTimeout(() => {
        console.log("Redirecting to the New Image");
        return res.sendFile(newImg);
    }, 1000);
};
