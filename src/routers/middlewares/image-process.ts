import express, {Application} from "express";
import {resizeImage} from "../../utilities/resize-img";
export const imageProcess = async (
    req: express.Request,
    res: express.Response
): Promise<void | unknown> => {
    const {img, width, height, format} = req.query;
    const imgWidth: number | null = width ? parseInt(width as string, 10) : null;
    const imgHeight: number | null = height ? parseInt(height as string, 10) : null;
    const imgName: string | null = img ? (img as string) : null;
    const imgFormat: string | null = format ? (format as string) : "jpg";

    const newImg: string | unknown = await resizeImage(
        imgName as string,
        imgWidth as number,
        imgHeight as number,
        imgFormat as string
    );
    const result: string = newImg as string;

    if (result === "Fatal Error") {
        return res.redirect("/FatalError");
    }
    setTimeout(() => {
        return res.sendFile(result);
    }, 1000);
};
