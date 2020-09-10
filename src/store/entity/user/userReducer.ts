import { UserActionType, SET_USERS } from "./userActionTypes";
import { DataState, normalizeArray } from "../../util";
import User from "../../../models/User";

export type UserState = DataState<User>

const initialState: UserState = {
    byId: {},
    allIds: []
}

const userReducer: (state: UserState | undefined, action: UserActionType) => UserState = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return normalizeArray(action.payload.users)
        default:
            return state;
    }
}

export default userReducer