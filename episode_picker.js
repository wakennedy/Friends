const fs = require("fs");
const fetch = require("node-fetch");
const prompt = require("prompt-sync")({ sigint: true });

const jsonSetup = require("./jsons/json_setup");
const random = jsonSetup.pickEp;
const reset = jsonSetup.resetEps;

// import { pickEp, resetEps } from "./jsons/json_setup";

// const raw_episodes_list = fs.readFileSync("episodes.json");
// const episodes_list = JSON.parse(raw_episodes_list);

// const raw_master_list = fs.readFileSync("master_episode_list.json");
// const master_list = JSON.parse(raw_master_list);

const SEARCHURL = "http://api.tvmaze.com/singlesearch/shows?q=";

let args = process.argv.slice(2);

// const getRandomInt = function (max) {
//   return Math.floor(Math.random() * Math.floor(max));
// };
// const adjustList = function (episodeNumber, list) {
//   list.splice(episodeNumber, 1);
//   return JSON.stringify(list);
// };
// const pickEp = function (choices) {
//   //get randomization
//   let number = getRandomInt(choices.length);
//   //get episode from that random number and 'Declare' it.
//   let episode = choices[number];
//   console.log(episode);

//   //take chosen episode out of list and update list
//   let newJson = adjustList(number, choices);
//   fs.writeFileSync("episodes.json", newJson);
// };
// const resetEps = function () {
//   fs.writeFileSync("episodes.json", raw_master_list);
// };

// const fetchAttempt = async function (id) {
//   let info = fetch("http://api.tvmaze.com/shows/431");
//   let result = await info;
//   let json = await result.json();
//   console.log(json);
// };

const displaySearchInfo = function (show) {
  console.log(`Name: ${show.name}`);
  console.log(`API-ID: ${show.id}`);
};

const searchFetch = async function (show) {
  let req = fetch(`${SEARCHURL}${show}`);
  let res = await req;
  let json = await res.json();
  displaySearchInfo(json);
};

// resetEps();
// console.log("Watched Episodes Reset");
const input = function () {
  let done = false;
  while (!done) {
    let sign = prompt("Please Enter Name ", "Guest");
    console.log(`Hello ${sign}`);
    let exit = prompt("Done?  ");
    if (exit == "yes") {
      done = true;
    }
  }
};

console.log(`Args: ${args}`);
switch (args[0]) {
  case "reset":
    console.log("Watched Episodes Reset");
    reset();
    break;
  case "search":
    searchFetch(args[1]);
    break;
  case "random":
    // pickEp(episodes_list);
    let info = random();
    console.log(`S-Ep: ${info.season} - ${info.number}`);
    console.log(`${info.summary}`);

    // console.log(jsonSetup);

    // console.log(episodes_list.length);
    break;
  default:
    console.log("Sorry, that is not something I know how to do.");
  // fetchAttempt();
  // input();
}
// console.log("Nothing Happened");

// pickEp(episodes_list);
// console.log(episodes_list.length);
