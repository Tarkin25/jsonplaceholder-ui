import Album from "../../../models/Album";
import { DataState, normalizeArray } from "../../util";
import { AlbumActionType, SET_ALBUMS } from "./albumActionTypes";

export type AlbumState = DataState<Album>

const initialState: AlbumState = {
    byId: {},
    allIds: []
}

const albumReducer: (state: AlbumState | undefined, action: AlbumActionType) => AlbumState = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            return normalizeArray(action.payload.albums)
        default:
            return state
    }
}

export default albumReducer