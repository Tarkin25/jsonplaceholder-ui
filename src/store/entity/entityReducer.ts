import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import todoReducer from "./todo/todoReducer";
import { UserActionType } from "./user/userActionTypes";
import { TodoActionType } from "./todo/todoActionTypes";
import { PostActionType } from "./post/postActionTypes";
import postReducer from "./post/postReducer";
import { CommentActionType } from "./comment/commentActionTypes";
import commentReducer from "./comment/commentReducer";
import albumReducer from "./album/albumReducer";
import { AlbumActionType } from "./album/albumActionTypes";
import { PhotoActionType } from "./photo/photoActionTypes";
import photoReducer from "./photo/photoReducer";

const entityReducer = combineReducers({
    users: userReducer,
    todos: todoReducer,
    posts: postReducer,
    comments: commentReducer,
    albums: albumReducer,
    photos: photoReducer
})

export type EntityActionType = UserActionType | TodoActionType | PostActionType | CommentActionType | AlbumActionType | PhotoActionType

export type EntityState = ReturnType<typeof entityReducer>

export default entityReducer