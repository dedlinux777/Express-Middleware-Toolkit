const express = require("express");
const app = express();
const fs = require("fs").promises;


app.use("/api",(req, res, next) => {
  req.time = new Date(Date.now()).toString();
  const logData = { url: req.url, method: req.method, time: req.time };
  log(logData);
  next();
});


app.get("/", (req, res) => {
  res.send("Hi I am root");
});

app.get("/random", (req, res) => {
  res.send("Hi I am random");
});

app.get("/api", checkToken,(req, res) => {
  res.send("Hi I am api");
});

app.use((req, res)=>{
  res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000 http://localhost:3000/");
});
