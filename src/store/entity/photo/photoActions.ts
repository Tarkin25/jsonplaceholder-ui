import { ThunkAction } from "redux-thunk";
import Photo from "../../../models/Photo";
import photoService from "../../../services/photoService";
import { RootState } from "../../rootReducer";
import { PhotoActionType, SET_PHOTOS } from "./photoActionTypes";

export const setPhotos: (photos: Photo[]) => PhotoActionType = photos => ({
    type: SET_PHOTOS,
    payload: {
        photos
    }
})

export const fetchPhotos: () => ThunkAction<Promise<void>, RootState, void, PhotoActionType> = () => dispatch => {
    return photoService.findAll()
    .then(res => res.data)
    .then(photos => {
        dispatch(setPhotos(photos))
    })
}