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
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            this.posts = data;

        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            this.loading = false;
        }
    }
}

export const postStore = new PostStore();
export const PostStoreContext = createContext(postStore);