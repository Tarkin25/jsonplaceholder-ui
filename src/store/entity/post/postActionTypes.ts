import Post from "../../../models/Post"

export const SET_POSTS = 'SET_POSTS'

type SetPosts = {
    type: typeof SET_POSTS
    payload: {
        posts: Post[]
    }
}

export type PostActionType = SetPosts