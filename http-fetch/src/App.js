import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import PostList from "./PostList";
import { PostStoreContext } from "./store";

const App = observer(() => {
  const store = useContext(PostStoreContext);

  const handlesubmit = () => {
    store.fetchPost();
    console.log("handle submit is called");
  }

console.log("app is called");


  return (
    <>
    <h1>fetch</h1>
    <button onClick={handlesubmit} > fetch posts</button>
    <PostList/>
    </>
  )
})

export default App;
