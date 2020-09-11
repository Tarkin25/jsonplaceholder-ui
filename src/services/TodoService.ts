import Todo from "../models/Todo";
import { Service, ServiceImpl } from "./serviceGenerics";
interface TodoService extends Service<Todo> {

}

const todoService: TodoService = new ServiceImpl("/todos")

export default todoService