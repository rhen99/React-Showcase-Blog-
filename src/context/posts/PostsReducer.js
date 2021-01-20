import { GET_POST, GET_POSTS } from "../types";

function PostsReducer(state, action) {
    const { payload, type } = action;

    switch (type){
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
            };
        
        case GET_POST:
            return {
                ...state,
                post: payload,
                
            };
        default:
            return state;
    }
}

export default PostsReducer
