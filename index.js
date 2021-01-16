const fs = require("fs");

let rawdata = fs.readFileSync("episodes.json");
let episodes = JSON.parse(rawdata);
console.log("App Start");
console.log(episodes);
console.log("App Close");
