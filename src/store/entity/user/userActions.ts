import User from "../../../models/User";
import { UserActionType, SET_USERS } from "./userActionTypes";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../rootReducer";
import userService from "../../../services/userService";

export const setUsers: (users: User[]) => UserActionType = (users) => ({
    type: SET_USERS,
    payload: {
        users,
    },
});

export const fetchUsers: () => ThunkAction<
    Promise<void>,
    RootState,
    void,
    UserActionType
> = () => async (dispatch) => {
    userService.findAll().then((res) => {
        dispatch(setUsers(res.data));
    });
};
