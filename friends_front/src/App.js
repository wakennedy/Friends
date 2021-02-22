import logo from "./logo.svg";
import feRandom from "./components/fe_episodes";
import React, { Component, Fragment, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <Fragment>
      <div>
        <p>{count}</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div></div>
    </Fragment>
  );
}

export default App;
