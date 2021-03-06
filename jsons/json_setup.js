const fs = require("fs");

const raw_master_list = fs.readFileSync("./jsons/master_episode_list.json");
const master_list = JSON.parse(raw_master_list);

const raw_episodes_list = fs.readFileSync("./jsons/episodes.json");
const working_episode_list = JSON.parse(raw_episodes_list);

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};
const adjustList = function (episodeNumber, list) {
  list.splice(episodeNumber, 1);
  return JSON.stringify(list);
};
const pickEp = function () {
  //get randomization
  let number = getRandomInt(working_episode_list.length);
  //get episode from that random number and 'Declare' it.
  let episode = working_episode_list[number];

  //take chosen episode out of list and update list
  let newJson = adjustList(number, working_episode_list);
  fs.writeFileSync("./jsons/episodes.json", newJson);
  return episode;
};
const resetEps = function () {
  fs.writeFileSync("./jsons/episodes.json", raw_master_list);
};

module.exports = {
  pickEp,
  resetEps,
};
