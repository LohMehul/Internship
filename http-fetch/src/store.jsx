import { makeAutoObservable } from "mobx"
import { createContext } from "react";


class PostStore {
    posts = [];
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchPost() {
        this.loading = true;
        console.log("loading true called");

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const data = await response.json();
            this.posts = data;
            console.log(this.posts);

        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            this.loading = false;
            console.log("loading false called");
        }
    }
}

export const postStore = new PostStore();
export const PostStoreContext = createContext(postStore);