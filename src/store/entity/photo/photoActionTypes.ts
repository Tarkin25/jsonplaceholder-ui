import Photo from "../../../models/Photo"

export const SET_PHOTOS = 'SET_PHOTOS'

type SetPhotos = {
    type: typeof SET_PHOTOS
    payload: {
        photos: Photo[]
    }
}

export type PhotoActionType = SetPhotos