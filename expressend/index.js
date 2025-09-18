import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080; // default port to listen

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

app.get("/", async (req, res) => {
  return res.send("Hello, world!");
});

