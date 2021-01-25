const fs = require("fs");
const fetch = require("node-fetch");

const raw_episodes_list = fs.readFileSync("episodes.json");
const episodes_list = JSON.parse(raw_episodes_list);

const raw_master_list = fs.readFileSync("master_episode_list.json");
const master_list = JSON.parse(raw_master_list);

let args = process.argv.slice(2);

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
const resetEps = function () {
  fs.writeFileSync("episodes.json", raw_master_list);
};

console.log("App Start");

const fetchAttempt = async function () {
  let info = fetch("http://api.tvmaze.com/shows/1");
  let result = await info;
  console.log(JSON.stringify(result));
};

// resetEps();
// console.log("Watched Episodes Reset");

console.log(`Args: ${args}`);
switch (args[0]) {
  case "reset":
    console.log("Watched Episodes Reset");
    resetEps();
    break;
  case "random":
    pickEp(episodes_list);
    console.log(episodes_list.length);
    break;
  default:
    console.log("Sorry, that is not something I know how to do.");
    fetchAttempt();
}
// console.log("Nothing Happened");

// pickEp(episodes_list);
// console.log(episodes_list.length);

console.log("App Close");
