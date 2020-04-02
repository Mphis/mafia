import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Intro from "./Intro";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <div className="display">
      <Intro />
    </div>
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
