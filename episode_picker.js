const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });

const jsonSetup = require("./jsons/json_setup");
const randomEpisode = jsonSetup.pickEp;
const resetWorkingEpisodes = jsonSetup.resetEps;

const fetchSetup = require("./fetch/fetch_setup");
const search = fetchSetup.searchFetch;

let args = process.argv.slice(2);

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
console.log("------------------------------");
console.log(`Args: ${args}`);
console.log("------------------------------");

switch (args[0].toLowerCase()) {
  case "reset":
    console.log("Watched Episodes Reset");
    console.log("------------------------------");
    resetWorkingEpisodes();
    break;
  case "search":
    search(args[1]);
    break;
  case "random":
    let info = randomEpisode();
    console.log(`S-Ep: ${info.season} - ${info.number}`);
    console.log("------------------------------");
    console.log(`${info.name}`);
    console.log("------------------------------");
    console.log(`${info.summary.replace(/<[^>]*>?/gm, "")}`);
    console.log("------------------------------");
    break;
  default:
    console.log("Sorry, that is not something I know how to do.");
}
