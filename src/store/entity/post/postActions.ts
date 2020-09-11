import { ThunkAction } from "redux-thunk";
import Post from "../../../models/Post";
import postService from "../../../services/postService";
import { RootState } from "../../rootReducer";
import { PostActionType, SET_POSTS } from "./postActionTypes";

export const setPosts: (posts: Post[]) => PostActionType = posts => ({
    type: SET_POSTS,
    payload: {
        posts
    }
})

export const fetchPosts: () => ThunkAction<Promise<void>, RootState, void, PostActionType> = () => (dispatch) => {
    return postService.findAll()
    .then(res => res.data)
    .then(posts => {
        dispatch(setPosts(posts))
    })
}