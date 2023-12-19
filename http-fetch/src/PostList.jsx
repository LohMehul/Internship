import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { PostStoreContext } from "./store";

const PostList = observer(
    () => {
        const store =useContext(PostStoreContext);

        if(store.loading){
            return <div> Loading Posts</div>
        }

        console.log("Post list is called");
        return (
            <>
                <ul>
                    {store.posts.map((post) => (
                        <li key={post.id}>
                            <h1>{post.name}</h1>
                            <h3>{post.email}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
)

export default PostList;