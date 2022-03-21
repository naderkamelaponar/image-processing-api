// بسم الله الرحمن الرحيم
import express from "express";
import images from "./api/images";
import fatalError from "./api/fatal-error";
const routers: express.Router = express.Router();
const rootPath: string = process.cwd();
routers.get("/", (req: express.Request, res: express.Response): void => {
    res.sendFile(rootPath + "/views/index.html");
});
routers.use("/images?", images);
routers.use("/FatalError", fatalError);

export default routers;
