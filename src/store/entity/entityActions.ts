import { ThunkAction } from "redux-thunk";
import { RootState } from "../rootReducer";
import { EntityActionType } from "./entityReducer";
import { fetchUsers } from "./user/userActions";
import { fetchTodos } from "./todo/todoActions";

export const fetchEntities: () => ThunkAction<Promise<void>, RootState, void, EntityActionType> = () => async (dispatch) => {
    await Promise.all([dispatch(fetchUsers()), dispatch(fetchTodos())])

    return
}

