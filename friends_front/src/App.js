import logo from "./logo.svg";
import React, { Component, Fragment, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <Fragment>
      <p>{count}</p>
      <button onClick={handleClick}>Click Me</button>
    </Fragment>
  );
}

export default App;
