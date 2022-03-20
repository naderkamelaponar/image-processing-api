import express from "express";
import fs from "fs";
import path from "path";
export const checkInputs = (req: express.Request, res: express.Response, next: Function): void => {
    console.log(`Checking The Inputs`);
    const dir: string = process.cwd();
    const {img, width, height, format} = req.query;
    const imgWidth: number | null = width ? parseInt(width as string, 10) : null;
    const imgHeight: number | null = height ? parseInt(height as string, 10) : null;
    const imgName: string | null = img ? (img as string) : null;
    const imgFormat: string | null = format ? (format as string) : null;

    if (imgName == null || imgName === "") {
        res.send({Error: "Input the Image Name"});
        return;
    } else {
        if (imgName && !fs.existsSync(dir + "/images/" + imgName)) {
            res.send({Error: "Original Image not found"});
            return;
        }
    }

    if (imgWidth) {
        if (imgWidth < 50 || imgWidth > 1000) {
            res.send({
                Error: "Image width should not be less than 50px or more than 1000px",
            });
            return;
        }
    } else {
        res.send({Error: "Input the image width"});
        return;
    }
    if (imgHeight) {
        if (imgHeight < 50 || imgHeight > 1000) {
            res.send({
                Error: "Image height should not be less than 50px or more than 1000px",
            });
            return;
        }
    } else {
        res.send({Error: "Input the image height"});
        return;
    }
    if (imgFormat) {
        if (!/[jpg]|[png]|[jpeg]/.test(imgFormat as string)) {
            res.send({
                Error: "Leave the Format empty or enter a proper format",
            });
            return;
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
                console.log("Image is already processed");
                return res.sendFile(fullName);
            }
        }
    }

    if (!fs.existsSync(dir + "/images/thumbnail")) {
        fs.mkdir(path.join(dir, "/images/thumbnail"), (err) => {
            if (err) {
                return console.error(err);
            }
        });
    }
    next();
};
