// بسم الله الرحمن الرحيم
import express from "express";
import images from "./api/images";
const routers: express.Router = express.Router();
const rootPath: string = process.cwd();
routers.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(rootPath + "/views/index.html");
});
routers.use("/images?", images);
export default routers;
