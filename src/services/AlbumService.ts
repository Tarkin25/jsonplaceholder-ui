import api from "../config/api";
import Album, { AlbumBase } from "../models/Album";
import Photo from '../models/Photo';
import { AxiosResponse } from 'axios';

const findAll: () => Promise<AxiosResponse<Album[]>> = async () => {
    const response = await api.get<AlbumBase[]>("/albums");

    return {
        ...response,
        data: await Promise.all(response.data.map(async albumBase => {
            const photos = await getPhotos(albumBase.id);

            return {
                ...albumBase,
                thumbnail: photos.data[0]
            }
        }))
    }
}

const findById: (id: number) => Promise<AxiosResponse<AlbumBase>> = id => api.get<AlbumBase>(`/albums/${id}`)

const getPhotos: (id: number) => Promise<AxiosResponse<Photo[]>> = id => api.get<Photo[]>(`/albums/${id}/photos`)

const AlbumService = {
    findAll,
    findById,
    getPhotos
}

export default AlbumService;