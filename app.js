const express = require("express");
const app = express();
const fs = require("fs").promises;

let count = 0;
let log = async function writeToFile(log) {
  try {
    count++;
    const logData = `REQUEST:\n${count}\t${log.url}\t${log.method}\t${log.time}\n`;
    await fs.writeFile("log.txt", logData, "utf8");
    console.log(
      `Written log in log.txt Successfully: \nPath: ${log.url}\nMethod: ${log.method}\nTime: ${log.time}`
    );
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

//middleware -> response send: middleware can send response back to client without sending to below routes or other middlewares

// basic:
// app.use((req, res)=>{
//     console.log("Hi, I am a middleware");
//     res.send("Middleware finished"); // stops here even if there's next()
// });

// app.use((req, res,next)=>{
//     console.log("Hi, I am a middleware");
//     next();
// });

// utitlity middleware example :- logger:

app.use((req, res, next) => {
  if (req.url === "/random") {
    req.time = new Date(Date.now()).toString();
    const logData = { url: req.url, method: req.method, time: req.time };
    log(logData);
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Hi I am root");
});

app.get("/random", (req, res) => {
  res.send("Hi I am random");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000 http://localhost:3000/");
});
