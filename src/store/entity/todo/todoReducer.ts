import { DataState, normalizeArray } from "../../util";
import Todo from "../../../models/Todo";
import { TodoActionType, SET_TODOS } from "./todoActionTypes";

export type TodoState = DataState<Todo>

const initialState: TodoState = {
    byId: {},
    allIds: [],
}

const todoReducer: (state: TodoState | undefined, action: TodoActionType) => TodoState = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return normalizeArray(action.payload.todos)
        default:
            return state;
    }
}

export default todoReducer;