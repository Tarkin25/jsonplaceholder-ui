import DomainEntity from "./DomainEntity";

type Album = DomainEntity & {
    userId: number
    title: string
}

export default Album;