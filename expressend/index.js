import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import { db } from "./util/FirebaseInit.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

const app = express();
const port = 8080; // default port to listen

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  return res.send("Hello, world!");
});

app.get("/test", async (req, res) => {
  console.log("getting all items");
  const collectionRef = collection(db, "dbase");
  const collectionSnap = await getDocs(collectionRef);
  const docs = [];
  collectionSnap.forEach((doc) => {
    docs.push(doc.data());
  });
  res.send(docs);
});

app.post("/test", async (req, res) => {
  const testRef = collection(db, "dbase");
  const testBody = req.body;
  try {
    await addDoc(testRef, testBody);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
  res.status(200).send("successfully created item");
});
function start() {
  app.listen(port, () => {
    console.log(`Started listening on http://localhost:${port}`);
  });
}
start();
