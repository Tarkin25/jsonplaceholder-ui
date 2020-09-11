import Comment from "../../../models/Comment";
import { DataState, normalizeArray } from "../../util";
import { CommentActionType, SET_COMMENTS } from "./commentActionTypes";

export type CommentState = DataState<Comment>

const initialState: CommentState = {
    byId: {},
    allIds: []
}

const commentReducer: (state: CommentState | undefined, action: CommentActionType) => CommentState = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: 
            return normalizeArray(action.payload.comments)
        default:
            return state;
    }
}

export default commentReducer;