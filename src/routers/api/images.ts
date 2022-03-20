// بسم الله الرحمن الرحيم
import express, {Application} from "express";
import {checkInputs} from "../middlewares/check-inputs";
import {imageProcess} from "../middlewares/image-process";
const getImages: express.Router = express.Router();
getImages.get("/?", checkInputs, imageProcess);
getImages.post("/?", checkInputs, imageProcess);
export default getImages;
