import Photo from "./Photo";

export type AlbumBase = {
    id: number,
    title: string
}

export type AlbumThumbnail = {
    thumbnail: Photo
}

type Album = AlbumBase & AlbumThumbnail

export default Album;