const express = require("express");
const app = express();
const fs = require("fs").promises;
const log = require("./middlewares/logger");
const auth = require("./middlewares/auth");
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/api",log);

app.get("/", (req, res) => {
  res.render("authForm.ejs");
});

app.get("/random", (req, res) => {
  res.send("This is a public random route.");
});

app.get("/api", auth, (req, res) => {
  res.send("Success: You have reached the protected API route!");
});

app.use((req, res, next) => {
  res.status(404).send("Error: Resource Not Found");
});

// This catches the 'ACCESS DENIED' error thrown in auth.js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send(`<h1>${err.message}</h1><a href="/">Try Again</a>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});