import {
    UserActionType,
    BEGIN_LOAD_USERS,
    SUCCESS_LOAD_USERS,
    ERROR_LOAD_USERS,
} from "./userActionTypes";
import User from "../../models/User";
import UserService from "../../services/UserService";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ActionType } from "../types";
import { RootState } from "../rootReducer";

export const beginLoadUsers: () => UserActionType = () => ({
    type: BEGIN_LOAD_USERS,
});

export const successLoadUsers: (users: User[]) => UserActionType = (users) => ({
    type: SUCCESS_LOAD_USERS,
    users,
});

export const errorLoadUsers: (error: any) => UserActionType = (error) => ({
    type: ERROR_LOAD_USERS,
    error,
});

export const loadUsers = (): ThunkAction<Promise<void>, RootState, void, UserActionType> => (dispatch: ThunkDispatch<RootState, void, ActionType>) => {
    dispatch(beginLoadUsers());

    return UserService.findAll()
    .then(res => res.data)
    .then(users => {
        dispatch(successLoadUsers(users))
    })
    .catch(error => {
        dispatch(errorLoadUsers(error))
    })
}
