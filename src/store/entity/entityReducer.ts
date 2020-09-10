import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import todoReducer from "./todo/todoReducer";
import { UserActionType } from "./user/userActionTypes";
import { TodoActionType } from "./todo/todoActionTypes";

const entityReducer = combineReducers({
    users: userReducer,
    todos: todoReducer
})

export type EntityActionType = UserActionType | TodoActionType

export type EntityState = ReturnType<typeof entityReducer>

export default entityReducer