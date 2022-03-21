import express from "express";
import fs from "fs";
import path from "path";
export const checkInputs = async (
    req: express.Request,
    res: express.Response,
    next: Function
): Promise<void | unknown> => {
    const dir: string = process.cwd();
    const {img, width, height, format} = req.query;
    const imgWidth: number | null = width ? parseInt(width as string, 10) : null;
    const imgHeight: number | null = height ? parseInt(height as string, 10) : null;
    const imgName: string | null = img ? (img as string) : null;
    const imgFormat: string | null = format ? (format as string) : null;

    if (imgName == null || imgName === "") {
        return res.send({Error: "Input the Image Name"});
    } else {
        if (imgName && !fs.existsSync(dir + "/images/" + imgName)) {
            return res.send({Error: "Original Image not found"});
        }
    }

    if (imgWidth) {
        if (imgWidth < 50 || imgWidth > 1000) {
            return res.send({
                Error: "Image width should not be less than 50px or more than 1000px",
            });
        }
    } else {
        return res.send({Error: "Input the image width"});
    }
    if (imgHeight) {
        if (imgHeight < 50 || imgHeight > 1000) {
            return res.send({
                Error: "Image height should not be less than 50px or more than 1000px",
            });
        }
    } else {
        return res.send({Error: "Input the image height"});
    }
    if (imgFormat) {
        if (!/[jpg]|[png]|[jpeg]/.test(imgFormat as string)) {
            return res.send({
                Error: "Leave the Format empty or enter a proper format",
            });
        } else {
            const fullName: string =
                dir +
                "/images/thumbnail/" +
                imgName?.split(".")[0] +
                "_" +
                imgWidth +
                "_" +
                imgHeight +
                "." +
                imgFormat;
            if (fs.existsSync(fullName)) {
                return res.sendFile(fullName);
            }
        }
    }

    if (!fs.existsSync(dir + "/images/thumbnail")) {
        fs.mkdir(path.join(dir, "/images/thumbnail"), (err) => {
            if (err) {
                return res.redirect("/FatalError");
            }
        });
    }
    next();
};
//checked
