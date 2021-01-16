const fs = require("fs");

let raw_master_list = fs.readFileSync("master_episode_list.json");
let master_list = JSON.parse(raw_master_list);

const mutateIndices = function (array) {
  let newMaster = [];
  for (let i = 0; i <= array.length; i++) {
    let item = array[i];

    try {
      item.id = i;
      newMaster.push(item);
    } catch (err) {
      console.log(err);
    }
  }
  return newMaster;
};

console.log("App Start");
// mutateIndices(master_list);
// console.log(master_list);

let newJson = JSON.stringify(mutateIndices(master_list));
fs.writeFileSync("episodes.json", newJson);

console.log("App Close");
