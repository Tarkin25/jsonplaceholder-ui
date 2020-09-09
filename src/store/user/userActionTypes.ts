import User from "../../models/User";

export const BEGIN_LOAD_USERS = 'BEGIN_LOAD_USERS'
export const SUCCESS_LOAD_USERS = 'SUCCESS_LOAD_USERS'
export const ERROR_LOAD_USERS = 'ERROR_LOAD_USERS'

export type BeginLoadUsers = {
    type: typeof BEGIN_LOAD_USERS
}

export type SuccessLoadUsers = {
    type: typeof SUCCESS_LOAD_USERS
    users: User[]
}

export type ErrorLoadUsers = {
    type: typeof ERROR_LOAD_USERS
    error: any
}

export type UserActionType = BeginLoadUsers | SuccessLoadUsers | ErrorLoadUsers