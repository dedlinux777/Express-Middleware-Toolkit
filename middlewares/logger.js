
let count = 0;
let log = async function writeToFile(log) {
  try {
    count++;
    const logData = `REQUEST:\n${count}\t${log.url}\t${log.method}\t${log.time}\n`;
    await fs.appendFile("log.txt", logData, "utf8");
    console.log(
      `Written log in log.txt Successfully: \nPath: ${log.url}\nMethod: ${log.method}\nTime: ${log.time}`
    );
  } catch (err) {
    console.error("Error writing file:", err);
  }
};
