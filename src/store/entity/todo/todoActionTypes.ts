import Todo from "../../../models/Todo"

export const SET_TODOS = 'SET_TODOS'

type SetTodos = {
    type: typeof SET_TODOS,
    payload: {
        todos: Todo[]
    }
}

export type TodoActionType = SetTodos