import DomainEntity from "./DomainEntity";

type Comment = DomainEntity & {
    postId: number,
    name: string,
    email: string,
    body: string
}

export default Comment;