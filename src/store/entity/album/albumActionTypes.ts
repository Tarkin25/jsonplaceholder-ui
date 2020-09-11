import Album from "../../../models/Album"

export const SET_ALBUMS = 'SET_ALBUMS'

type SetAlbums = {
    type: typeof SET_ALBUMS
    payload: {
        albums: Album[]
    }
}

export type AlbumActionType = SetAlbums