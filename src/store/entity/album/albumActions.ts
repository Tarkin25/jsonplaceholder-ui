import { ThunkAction } from "redux-thunk";
import Album from "../../../models/Album";
import AlbumService from "../../../services/albumService";
import { RootState } from "../../rootReducer";
import { AlbumActionType, SET_ALBUMS } from "./albumActionTypes";

export const setAlbums: (albums: Album[]) => AlbumActionType = albums => ({
    type: SET_ALBUMS,
    payload: {
        albums
    }
})

export const fetchAlbums: () => ThunkAction<Promise<void>, RootState, void, AlbumActionType> = () => dispatch => {
    return AlbumService.findAll()
    .then(res => res.data)
    .then(albums => {
        dispatch(setAlbums(albums))
    })
}