const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });

const jsonSetup = require("./jsons/json_setup");
const randomEpisode = jsonSetup.pickEp;
const resetWorkingEpisodes = jsonSetup.resetEps;

const fetchSetup = require("./fetch/fetch_setup");
const search = fetchSetup.searchFetch;

const input = function () {
  let done = false;
  while (!done) {
    let sign = prompt("> ");
    switch (sign) {
      case "help":
        console.log("Type a Command or 'done' to end.");
        break;
      case "test":
        console.log("Test Case in input function");
        break;
      case "another":
        console.log("Another Test Case");
        break;
      case "done":
        done = true;
        break;
      case "reset":
        console.log("Watched Episodes Reset");
        resetWorkingEpisodes();
        break;
      case "search":
        search(betterArgs[1]);
        break;
      case "random":
        let info = randomEpisode();
        console.log(`S-Ep: ${info.season} - ${info.number}`);
        console.log(`${info.name}`);
        console.log(`${info.summary.replace(/<[^>]*>?/gm, "")}`);
        break;
      default:
        console.log("error");
    }
  }
};

let args = process.argv.slice(2);
let betterArgs = args.map((x) => x.toLowerCase());

console.log(`Args: ${args}`);
// console.log("------------------------------");

switch (betterArgs[0]) {
  case "input":
    input();
    break;
  default:
    console.log("Sorry, that is not something I know how to do.");
}
