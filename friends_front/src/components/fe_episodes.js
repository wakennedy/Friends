import React, { Component, Fragment, useState } from "react";

const jsonSetup = require("./jsons/json_setup");
const randomEpisode = jsonSetup.pickEp;
const resetWorkingEpisodes = jsonSetup.resetEps;

const fetchSetup = require("./fetch/fetch_setup");
const search = fetchSetup.searchFetch;

function feRandom() {
  return (
    <Fragment>
      <div>{randomEpisode()}</div>
    </Fragment>
  );
}

export default feRandom;
