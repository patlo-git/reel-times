import express from "express";
import cors from "cors";
import router from "./router";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "Hi" });
});

app.use("/api", router);

export default app;
