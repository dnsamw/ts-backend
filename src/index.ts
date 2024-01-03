import http from "http";
import express from "express";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import Download from "../services/downloader";

dotenv.config();

const app = express();

app.use(cors());
app.use(compression());
app.use(express.static("files"));
app.use(express.json());

const server = http.createServer(app);

app.get("/", async (req, res) => {
  res.status(200).send("Hello Typescript!");
});

app.post("/", async (req, res) => {
  const path = req.body.path;
  try {
    const response = await Download.file(path);
    if (!response) return res.status(400).send("Download Failed");
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is started on http://localhost:${process.env.PORT || 5000}`
  );
});
