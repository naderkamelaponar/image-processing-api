// بسم الله الرحمن الرحيم
//checked
import express, {Application} from "express";
const fatalError: express.Router = express.Router();
const errFunction = (req: express.Request, res: express.Response): void => {
    let markUp: string = `<form style="text-align:center;"  action="/">`;
    markUp += `<p >Fatal Error</p>
    <input type="submit"  value="Go to Home" />
    </form>`;
    res.status(200).send(markUp);
};
fatalError.get("/", errFunction);
fatalError.post("/", errFunction);

export default fatalError;
