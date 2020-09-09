import { UserActionType } from "./user/userActionTypes"

export type StringMap<V> = {
    [key: string]: V
}

export type DataState<T> = {
    byId: StringMap<T>
    allIds: string[],
    loading: boolean,
    loaded: boolean,
    error?: any
}

export type ActionType = UserActionType