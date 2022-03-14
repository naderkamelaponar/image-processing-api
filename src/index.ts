// بسم الله الرحمن الرحيم
import express from 'express';
const app = express();
const port = 3000;
const htmlFile = process.cwd() + '/index.html';
app.get('/', (req, res) => {
   let htmlPath = process.cwd() + '/src/index.html';
   res.sendFile(htmlFile);
});
app.listen(port, () => {
   console.log(`Server started @ http://localhost:${port}`);
});
export default app;
