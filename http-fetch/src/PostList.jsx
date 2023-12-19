import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { PostStoreContext } from "./store";

const PostList = observer(
    () => {
        const store =useContext(PostStoreContext);

        if(store.loading){
            return <div> Loading Posts</div>
        }


        return (
            <>
                <ul>
                    {store.posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
)

export default PostList;