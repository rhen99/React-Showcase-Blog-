import { useReducer } from "react";
import axios from "axios";

import { GET_POSTS, GET_POST } from '../types';
import PostsContext from "./PostsContext";
import PostsReducer from './PostsReducer';

const PostsState = (props) => {
    const initialState = {
        posts: [],
        post: {},
    };

    const [state, dispatch] = useReducer(PostsReducer, initialState);

    const getPosts = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

            const { data } = res;
            dispatch({ type: GET_POSTS, payload: data });
        } catch (e) {
            console.log(e);
        }
    }

    const getPost = async (id) => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

            const { data } = res;
            dispatch({ type: GET_POST, payload: data });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <PostsContext.Provider value={{
            posts: state.posts,
            post: state.post,
            getPost,
            getPosts
        }}>
            {props.children}
        </PostsContext.Provider>
    );
}

export default PostsState;