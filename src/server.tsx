import express from "express";

export const app = express();

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "Hi" });
});
