import { ThunkAction } from "redux-thunk";
import { RootState } from "../rootReducer";
import { EntityActionType } from "./entityReducer";
import { fetchUsers } from "./user/userActions";
import { fetchTodos } from "./todo/todoActions";
import { fetchPosts } from "./post/postActions";
import { fetchComments } from "./comment/commentActions";
import { fetchAlbums } from "./album/albumActions";
import { fetchPhotos } from "./photo/photoActions";

export const fetchEntities: () => ThunkAction<
    Promise<void>,
    RootState,
    void,
    EntityActionType
> = () => async (dispatch) => {
    await Promise.all([
        dispatch(fetchUsers()),
        dispatch(fetchTodos()),
        dispatch(fetchPosts()),
        dispatch(fetchComments()),
        dispatch(fetchAlbums()),
        dispatch(fetchPhotos())
    ]);

    return;
};
