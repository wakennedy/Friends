const fs = require("fs");

let raw_master_list = fs.readFileSync("master_episode_list.json");
let master_list = JSON.parse(raw_master_list);

const mutateIndices = function (array) {
  for (let i = 0; i <= array.length; i++) {
    let item = array[i];
    try {
      console.log(`${i} - ${item.id}`);
    } catch (err) {
      console.log(err);
    }
  }
};

console.log("App Start");
mutateIndices(master_list);
// console.log(master_list);
console.log("App Close");
