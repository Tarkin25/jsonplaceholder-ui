import DomainEntity from "./DomainEntity";

type Todo = DomainEntity & {
    title: string,
    completed: boolean,
    userId: number
}

export default Todo;