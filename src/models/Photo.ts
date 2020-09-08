import DomainEntity from "./DomainEntity";

type Photo = DomainEntity & {
    title: string,
    url: string,
    thumbnailUrl: string
}

export default Photo;