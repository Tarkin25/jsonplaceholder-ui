import DomainEntity from "./DomainEntity";

type Post = DomainEntity & {
    userId: number,
    title: string,
    body: string
}

export default Post;