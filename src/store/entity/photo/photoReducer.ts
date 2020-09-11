import Photo from "../../../models/Photo";
import { DataState, normalizeArray } from "../../util";
import { PhotoActionType, SET_PHOTOS } from "./photoActionTypes";

export type PhotoState = DataState<Photo>

const initialState: PhotoState = {
    byId: {},
    allIds: []
}

const photoReducer: (state: PhotoState | undefined, action: PhotoActionType) => PhotoState = (state = initialState, action) => {
    switch(action.type) {
        case SET_PHOTOS:
            return normalizeArray(action.payload.photos)
        default:
            return state
    }
}

export default photoReducer