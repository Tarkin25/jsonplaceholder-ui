import Post from "../../../models/Post";
import { DataState, normalizeArray } from "../../util";
import { PostActionType, SET_POSTS } from "./postActionTypes";

export type PostState = DataState<Post>

const initialState: PostState = {
    byId: {},
    allIds: []
}

const postReducer: (state: PostState | undefined, action: PostActionType) => PostState = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return normalizeArray(action.payload.posts)
        default:
            return state;
    }
}

export default postReducer