import { ThunkAction } from "redux-thunk";
import Comment from "../../../models/Comment";
import commentService from "../../../services/commentService";
import { RootState } from "../../rootReducer";
import { CommentActionType, SET_COMMENTS } from "./commentActionTypes";

export const setComments: (comments: Comment[]) => CommentActionType = comments => ({
    type: SET_COMMENTS,
    payload: {
        comments
    }
})

export const fetchComments: () => ThunkAction<Promise<void>, RootState, void, CommentActionType> = () => (dispatch) => {
    return commentService.findAll()
    .then(res => res.data)
    .then(comments => {
        dispatch(setComments(comments));
    })
}