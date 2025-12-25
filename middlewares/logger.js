const fs = require("fs").promises;
const path = require("path");

const logFilePath = path.join(__dirname, "logs\access.log");
let count = 0;

const loggerMiddleware = async (req, res, next) => {
  const start = Date.now();
  
  // Hook into the finish event to log after the response is sent
  res.on("finish", async () => {
    const duration = Date.now() - start;
    count++;
    
    const logData = `[#${count}] ${new Date().toISOString()} | ${req.method} ${req.originalUrl} | Status: ${res.statusCode} | Time: ${duration}ms\n`;
    
    try {
      await fs.appendFile(logFilePath, logData, "utf8");
    } catch (err) {
      console.error("Logging Error:", err);
    }
  });

  next();
};

module.exports = loggerMiddleware;