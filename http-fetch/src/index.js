import React from "react";
import ReactDOM from "react-dom";
import { PostStoreContext, postStore } from "./store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <PostStoreContext.Provider value={postStore}>
      <App />
    </PostStoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);