import { TodoActionType, SET_TODOS } from "./todoActionTypes";
import Todo from "../../../models/Todo";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../rootReducer";
import TodoService from "../../../services/TodoService";

export const setTodos: (todos: Todo[]) => TodoActionType = (todos) => ({
    type: SET_TODOS,
    payload: {
        todos
    }
})

export const fetchTodos: () => ThunkAction<Promise<void>, RootState, void, TodoActionType> = () => async (dispatch) => {
    TodoService.findAll()
    .then(res => {
        dispatch(setTodos(res.data))
    })
}