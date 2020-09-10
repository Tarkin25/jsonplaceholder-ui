import User from "../../../models/User";

export const SET_USERS = 'SET_USERS'

type SetUsers = {
    type: typeof SET_USERS
    payload: {
        users: User[]
    }
}

export type UserActionType = SetUsers