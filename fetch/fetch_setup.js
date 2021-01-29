const fetch = require("node-fetch");

const SEARCHURL = "http://api.tvmaze.com/singlesearch/shows?q=";

const searchFetch = async function (show) {
  let req = fetch(`${SEARCHURL}${show}`);
  let res = await req;
  let json = await res.json();
  displaySearchInfo(json);
};

const displaySearchInfo = function (show) {
  console.log(`Name: ${show.name}`);
  console.log(`API-ID: ${show.id}`);
};

module.exports = {
  searchFetch,
};
