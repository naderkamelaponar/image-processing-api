// بسم الله الرحمن الرحيم
import express, {Application} from "express";
import routers from "./routers/index";

const app: Application = express();
const port: number | null = 3000;
app.use("/", routers);
let markUp: string = `<form style="text-align:center;"  action="/">`;
markUp += `<p >Are You Lost ?</p>
<input type="submit"  value="Go to Home" />
</form>`;
app.use((req, res, next) => {
    res.status(404).send(markUp);
    next();
});

app.listen(port, () => {
    console.log(`Server started @ http://localhost:${port}`);
});
export default app;
