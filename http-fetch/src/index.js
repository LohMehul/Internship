import React from "react";
import ReactDOM from "react-dom";
import { PostStoreContext, postStore } from "./store";
import App from "./App";

ReactDOM.render(

    <PostStoreContext.Provider value={postStore}>
      <App />
    </PostStoreContext.Provider>,

  document.getElementById("root")
);