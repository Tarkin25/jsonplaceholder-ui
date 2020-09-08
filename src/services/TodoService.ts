import Todo from "../models/Todo";
import {AxiosResponse} from 'axios';
import api from "../config/api";

const findAll: () => Promise<AxiosResponse<Todo[]>> = async () => api.get<Todo[]>("/todos")

const TodoService = {
    findAll
}

export default TodoService;