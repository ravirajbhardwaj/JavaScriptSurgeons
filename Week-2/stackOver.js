const fs = require("fs");
const { readFile } = require("fs/promises");
const { json } = require("stream/consumers");

const person = { name: "Kallu", age: 25 };

// ✅ JSON me convert karke file me likhna
fs.writeFileSync("data.txt", person);

console.log("Data saved in JSON format!");
