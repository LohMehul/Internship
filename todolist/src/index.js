import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.jsx";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <><h1>hello todo</h1></>
    <App />
  </React.StrictMode>,
  rootElement
);
