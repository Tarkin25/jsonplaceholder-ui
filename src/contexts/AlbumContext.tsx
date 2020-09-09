import React, { createContext, ReactNode } from 'react'
import { AlbumBase } from '../models/Album';
import useLoader, { Loader } from '../hooks/useLoader';
import Photo from '../models/Photo';
import AlbumService from '../services/AlbumService';

type AlbumContextValue = AlbumBase & {
    photos: Loader<Photo>
}

type AlbumContextProps = {
    album: AlbumBase,
    children: ReactNode
}

const defaultValue: AlbumContextValue = {
    id: undefined!,
    title: undefined!,
    photos: undefined!
}

const AlbumContext = createContext(defaultValue);

const AlbumContextProvider = (props: AlbumContextProps) => {

    const {album, children} = props;

    const value = {
        ...album,
        photos: useLoader(() => AlbumService.getPhotos(album.id).then(res => res.data))
    }

    return (
        <AlbumContext.Provider value={value}>
            {children}
        </AlbumContext.Provider>
    )
}

export default AlbumContext

export {
    AlbumContextProvider
}
