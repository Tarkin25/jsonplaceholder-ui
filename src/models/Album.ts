import Photo from "./Photo";
import DomainEntity from "./DomainEntity";

export type AlbumBase = DomainEntity & {
    title: string
}

type Album = AlbumBase & {
    thumbnail: Photo
}

export default Album;