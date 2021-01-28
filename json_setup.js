const fs = require("fs");
const master = require("./jsons/master_episode_list.json");
const working_episodes = require("./jsons/episodes.json");

const raw_master_list = fs.readFileSync(master);
const master_list = JSON.parse(raw_master_list);

const raw_episodes_list = fs.readFileSync(working_episodes);
const episodes_list = JSON.parse(raw_episodes_list);

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
  fs.writeFileSync(working_episodes, newJson);
};
const resetEps = function () {
  fs.writeFileSync(working_episodes, raw_master_list);
};

module.exports.pickEp = pickEp(episodes_list);
exports.resetEps = resetEps();
