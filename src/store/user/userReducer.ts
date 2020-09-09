import { UserActionType, BEGIN_LOAD_USERS, SUCCESS_LOAD_USERS, ERROR_LOAD_USERS } from "./userActionTypes";
import { StringMap, DataState } from "../types";
import User from "../../models/User";

export type UserState = DataState<User>

const initialState: UserState = {
    byId: {},
    allIds: [],
    loaded: false,
    loading: false,
    error: null
}

const userReducer: (state: UserState | undefined, action: UserActionType) => UserState = (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_LOAD_USERS:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_LOAD_USERS:
            let users: StringMap<User> = {};

            action.users.forEach(user => users[user.id] = user);

            return {
                ...state,
                loaded: true,
                loading: false,
                byId: users,
                allIds: action.users.map(user => user.id.toString())
            }
        case ERROR_LOAD_USERS:
            return {
                ...state,
                ...initialState,
                error: action.error
            }
        default:
            return state;
    }
}

export default userReducer