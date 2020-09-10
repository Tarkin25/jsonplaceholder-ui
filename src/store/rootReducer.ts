import { combineReducers } from "redux";
import entityReducer, { EntityActionType } from "./entity/entityReducer";

const rootReducer = combineReducers({
    entities: entityReducer
})

export type ActionType = EntityActionType

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer