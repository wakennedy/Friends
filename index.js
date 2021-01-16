const fs = require("fs");

const raw_episodes_list = fs.readFileSync("episodes.json");
const episodes_list = JSON.parse(raw_episodes_list);

/////////////////////////   JSON SETUP
////////////////////////////////////////////////////////////////////////////
const raw_master_list = fs.readFileSync("master_episode_list.json");
const master_list = JSON.parse(raw_master_list);

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
const epConfirm = function (array) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    console.log(`${item.id} - ${i}`);
  }
};

/////////////////////////////////X JSON SETUP
// let newJson = JSON.stringify(mutateIndices(master_list));
// fs.writeFileSync("episodes.json", newJson);
// epConfirm(episodes_list);
////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};
const pickEp = function (choices) {
  let number = getRandomInt(choices.length);
  let ep = choices[number];
  console.log(ep.name);
};

console.log("App Start");

pickEp(episodes_list);

console.log("App Close");
