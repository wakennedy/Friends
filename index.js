const fs = require("fs");

const raw_episodes_list = fs.readFileSync("episodes.json");
const episodes_list = JSON.parse(raw_episodes_list);

const raw_master_list = fs.readFileSync("master_episode_list.json");
const master_list = JSON.parse(raw_master_list);

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};
const adjustList = function (episodeNumber, list) {
  list.splice(episodeNumber, 1);
  return JSON.stringify(list);
};
const pickEp = function (choices) {
  //get randomization
  let number = getRandomInt(choices.length);
  //get episode from that random number and 'Declare' it.
  let episode = choices[number];
  console.log(episode);

  //take chosen episode out of list and update list
  let newJson = adjustList(number, choices);
  fs.writeFileSync("episodes.json", newJson);
};

console.log("App Start");

pickEp(episodes_list);
console.log(episodes_list.length);

console.log("App Close");
