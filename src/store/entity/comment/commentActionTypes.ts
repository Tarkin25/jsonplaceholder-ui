import Comment from "../../../models/Comment"

export const SET_COMMENTS = 'SET_COMMENTS'

type SetComments = {
    type: typeof SET_COMMENTS
    payload: {
        comments: Comment[]
    }
}

export type CommentActionType = SetComments